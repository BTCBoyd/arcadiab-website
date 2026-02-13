#!/usr/bin/env node
/**
 * Add News Article to ArcadiaB Website
 * Usage: node add-news-article.mjs <URL>
 * 
 * Fetches article metadata and adds to news-articles.json
 */

import { readFileSync, writeFileSync } from 'fs';
import https from 'https';
import http from 'http';

const newsFile = './news-articles.json';

// Parse command line argument
const url = process.argv[2];

if (!url) {
  console.error('❌ Usage: node add-news-article.mjs <URL>');
  process.exit(1);
}

// Validate URL
try {
  new URL(url);
} catch (e) {
  console.error('❌ Invalid URL:', url);
  process.exit(1);
}

console.log(`📥 Fetching article metadata from: ${url}`);

// Fetch page HTML
function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Extract metadata from HTML
function extractMetadata(html, url) {
  const urlObj = new URL(url);
  const domain = urlObj.hostname.replace('www.', '');
  
  // Extract title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i) || 
                     html.match(/<meta property="og:title" content="(.*?)"/i) ||
                     html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  let title = titleMatch ? titleMatch[1].trim() : 'Article Title';
  
  // Clean up title
  title = title
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  
  // Remove common suffixes
  title = title.replace(/\s*[-|]\s*.*/g, '').trim();
  
  // Extract description
  const descMatch = html.match(/<meta name="description" content="(.*?)"/i) ||
                   html.match(/<meta property="og:description" content="(.*?)"/i);
  let description = descMatch ? descMatch[1].trim() : '';
  
  // Source name mapping
  const sourceMap = {
    'criptonoticias.com': { name: 'CriptoNoticias', icon: '📈' },
    'elhorizonte.mx': { name: 'El Horizonte', icon: '📰' },
    'youtube.com': { name: 'YouTube', icon: '📹' },
    'bitget.com': { name: 'Bitget News', icon: '🌐' },
    'bitcointreasuries.net': { name: 'Bitcoin Treasuries Blog', icon: '🏛️' },
    'forbes.com': { name: 'Forbes', icon: '💼' },
    'bloomberg.com': { name: 'Bloomberg', icon: '📊' },
    'coindesk.com': { name: 'CoinDesk', icon: '🪙' },
    'decrypt.co': { name: 'Decrypt', icon: '🔓' }
  };
  
  let source = 'News Source';
  let icon = '📰';
  
  for (const [key, val] of Object.entries(sourceMap)) {
    if (domain.includes(key)) {
      source = val.name;
      icon = val.icon;
      break;
    }
  }
  
  // Detect language
  const language = html.match(/lang="(es|en)"/i)?.[1] || 'es';
  
  // Extract date (current month if not found)
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  
  return {
    url,
    title,
    source,
    date,
    icon,
    description: description || `Article from ${source}`,
    language
  };
}

// Main execution
(async () => {
  try {
    // Fetch HTML
    const html = await fetchHTML(url);
    
    // Extract metadata
    const article = extractMetadata(html, url);
    
    console.log('\n✅ Extracted metadata:');
    console.log(`   Title: ${article.title}`);
    console.log(`   Source: ${article.source} ${article.icon}`);
    console.log(`   Date: ${article.date}`);
    console.log(`   Language: ${article.language}`);
    
    // Load existing articles
    const articles = JSON.parse(readFileSync(newsFile, 'utf-8'));
    
    // Check for duplicates
    if (articles.some(a => a.url === url)) {
      console.log('\n⚠️  Article already exists in database');
      process.exit(0);
    }
    
    // Add new article at the beginning (most recent first)
    articles.unshift(article);
    
    // Save updated JSON
    writeFileSync(newsFile, JSON.stringify(articles, null, 2));
    
    console.log('\n✅ Article added to news-articles.json');
    console.log(`   Total articles: ${articles.length}`);
    console.log('\n💡 Commit and push to deploy:\n   git add news-articles.json && git commit -m "Add news article" && git push');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
})();
