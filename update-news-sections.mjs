#!/usr/bin/env node
/**
 * Update News Sections in About Pages
 * Reads news-articles.json and updates nosotros.html + en/about.html
 * 
 * Usage: node update-news-sections.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

const newsFile = './news-articles.json';
const nosotrosFile = './nosotros.html';
const aboutFile = './en/about.html';

console.log('📰 Updating news sections...');

// Load articles
const articles = JSON.parse(readFileSync(newsFile, 'utf-8'));
console.log(`   Found ${articles.length} articles`);

// Get top 5 for about pages
const topArticles = articles.slice(0, 6);

// Generate Spanish HTML
function generateSpanishHTML(articles) {
  return articles.map(article => {
    const title = article.language === 'en' ? translateTitle(article.title) : article.title;
    const description = article.language === 'en' ? translateDescription(article.description) : article.description;
    
    return `                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="card" style="text-decoration: none;">
                    <div style="display: flex; align-items: start; gap: 1rem;">
                        <div style="font-size: 2rem;">${article.icon}</div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--gold); margin-bottom: 0.5rem;">
                                ${article.source}
                            </div>
                            <h3 class="h4" style="margin-bottom: 0.75rem;">
                                ${title}
                            </h3>
                            <p style="color: var(--text-secondary); font-size: 0.9rem;">
                                ${description}
                            </p>
                        </div>
                    </div>
                </a>`;
  }).join('\n\n');
}

// Generate English HTML
function generateEnglishHTML(articles) {
  return articles.map(article => {
    const title = article.language === 'es' ? translateTitleToEnglish(article.title) : article.title;
    const description = article.language === 'es' ? translateDescriptionToEnglish(article.description) : article.description;
    
    return `                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="card" style="text-decoration: none;">
                    <div style="display: flex; align-items: start; gap: 1rem;">
                        <div style="font-size: 2rem;">${article.icon}</div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--gold); margin-bottom: 0.5rem;">
                                ${article.source}
                            </div>
                            <h3 class="h4" style="margin-bottom: 0.75rem;">
                                ${title}
                            </h3>
                            <p style="color: var(--text-secondary); font-size: 0.9rem;">
                                ${description}
                            </p>
                        </div>
                    </div>
                </a>`;
  }).join('\n\n');
}

// Simple translations (keep originals for now)
function translateTitle(title) {
  return title; // Keep English titles in Spanish page for authenticity
}

function translateDescription(desc) {
  return desc; // Keep English descriptions
}

function translateTitleToEnglish(title) {
  const map = {
    'Bitcoin llega a la bolsa de México con empresa que sigue los pasos de Strategy': 'Bitcoin Arrives at Mexico\'s Stock Exchange Following Strategy\'s Model',
    'Surge la primera empresa mexicana que cotiza en bitcoin': 'First Mexican Company Trading on Bitcoin Emerges',
    'México ve nacer su capital Bitcoin en Mérida con acuerdo educativo': 'Mexico Sees Its Bitcoin Capital Born in Mérida with Education Agreement',
    'Video: ArcadiaB Coverage': 'Video: ArcadiaB Coverage',
    'ArcadiaB International Coverage': 'ArcadiaB International Coverage'
  };
  return map[title] || title;
}

function translateDescriptionToEnglish(desc) {
  const map = {
    'Cobertura del modelo de tesorería Bitcoin y estrategia de cotización en BIVA.': 'Coverage of ArcadiaB\'s Bitcoin treasury model and BIVA listing strategy.',
    'Artículo sobre el nombramiento de Ed Juline y la estrategia de tesorería corporativa.': 'Article on Ed Juline\'s appointment and corporate treasury strategy.',
    'Cobertura del convenio educativo entre ArcadiaB y el Instituto Tecnológico de Software de Mérida.': 'Coverage of educational partnership between ArcadiaB and Software Technology Institute of Mérida.',
    'Entrevista y análisis sobre estrategia Bitcoin de ArcadiaB.': 'Interview and analysis on ArcadiaB\'s Bitcoin strategy.',
    'Cobertura internacional sobre adopción corporativa Bitcoin en México.': 'International coverage on corporate Bitcoin adoption in Mexico.'
  };
  return map[desc] || desc;
}

// Update nosotros.html
const nosotrosHTML = readFileSync(nosotrosFile, 'utf-8');
const spanishNewsHTML = generateSpanishHTML(topArticles);

const nosotrosUpdated = nosotrosHTML.replace(
  /(<div class="grid-2" style="max-width: 900px; margin: 0 auto;">)([\s\S]*?)(<\/div>\s*<div style="text-align: center; margin-top: 3rem;">)/,
  `$1\n${spanishNewsHTML}\n            $3`
);

writeFileSync(nosotrosFile, nosotrosUpdated);
console.log('   ✅ Updated nosotros.html');

// Update en/about.html
const aboutHTML = readFileSync(aboutFile, 'utf-8');
const englishNewsHTML = generateEnglishHTML(topArticles);

const aboutUpdated = aboutHTML.replace(
  /(<div class="grid-2" style="max-width: 900px; margin: 0 auto;">)([\s\S]*?)(<\/div>\s*<div style="text-align: center; margin-top: 3rem;">)/,
  `$1\n${englishNewsHTML}\n            $3`
);

writeFileSync(aboutFile, aboutUpdated);
console.log('   ✅ Updated en/about.html');

console.log('\n✅ News sections updated!');
console.log('\n💡 Next steps:');
console.log('   git add nosotros.html en/about.html');
console.log('   git commit -m "Update news sections from JSON"');
console.log('   git push');
