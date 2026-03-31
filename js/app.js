/**
 * Text Counter - Count Characters, Words & More
 * 100% Client-side processing
 */

class TextCounter {
    constructor() {
        this.init();
    }

    init() {
        this.bindInputText();
        this.initThemeToggle();
        this.setCurrentYear();
        this.updateStats();
    }

    // ==================== Theme Toggle ====================
    initThemeToggle() {
        const themeSwitch = document.getElementById('theme-switch');
        const themeIcon = document.getElementById('theme-icon');

        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        this.updateThemeIcon(themeIcon, savedTheme);

        themeSwitch.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            const newTheme = isDark ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(themeIcon, newTheme);
        });
    }

    updateThemeIcon(iconElement, theme) {
        iconElement.innerHTML = theme === 'dark'
            ? `<svg class="sun-icon" viewBox="0 0 24 24" width="28" height="28"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06z"></path></svg>`
            : `<svg class="moon-icon" viewBox="0 0 24 24" width="28" height="28"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>`;
    }

    // ==================== Input Text ====================
    bindInputText() {
        const inputText = document.getElementById('input-text');
        inputText.addEventListener('input', () => {
            this.updateStats();
        });
    }

    // ==================== Statistics Calculation ====================
    updateStats() {
        const text = document.getElementById('input-text').value;

        // Basic counts
        const charCount = this.countCharacters(text);
        const charNoSpaceCount = this.countCharactersNoSpaces(text);
        const wordCount = this.countWords(text);
        const sentenceCount = this.countSentences(text);
        const paragraphCount = this.countParagraphs(text);
        const lineCount = this.countLines(text);

        // Time estimates
        const readingTime = this.calculateReadingTime(wordCount);
        const speakingTime = this.calculateSpeakingTime(wordCount);

        // Frequency analysis
        const charFrequency = this.getCharacterFrequency(text);
        const wordFrequency = this.getWordFrequency(text);

        // Update UI
        document.getElementById('char-count').textContent = charCount.toLocaleString();
        document.getElementById('char-no-space-count').textContent = charNoSpaceCount.toLocaleString();
        document.getElementById('word-count').textContent = wordCount.toLocaleString();
        document.getElementById('sentence-count').textContent = sentenceCount.toLocaleString();
        document.getElementById('paragraph-count').textContent = paragraphCount.toLocaleString();
        document.getElementById('line-count').textContent = lineCount.toLocaleString();
        document.getElementById('reading-time').textContent = readingTime;
        document.getElementById('speaking-time').textContent = speakingTime;

        // Update frequency lists
        this.updateFrequencyList('char-frequency', charFrequency);
        this.updateFrequencyList('word-frequency', wordFrequency);
    }

    // ==================== Counting Functions ====================
    
    countCharacters(text) {
        return text.length;
    }

    countCharactersNoSpaces(text) {
        return text.replace(/\s/g, '').length;
    }

    countWords(text) {
        const trimmed = text.trim();
        if (!trimmed) return 0;
        return trimmed.split(/\s+/).filter(word => word.length > 0).length;
    }

    countSentences(text) {
        const trimmed = text.trim();
        if (!trimmed) return 0;
        // Count sentences ending with . ! or ?
        const sentences = trimmed.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.length;
    }

    countParagraphs(text) {
        const trimmed = text.trim();
        if (!trimmed) return 0;
        // Split by double newlines or more
        const paragraphs = trimmed.split(/\n\s*\n/).filter(para => para.trim().length > 0);
        return paragraphs.length;
    }

    countLines(text) {
        if (!text) return 0;
        const lines = text.split('\n');
        return lines.length;
    }

    // ==================== Time Calculations ====================
    
    calculateReadingTime(wordCount) {
        const wordsPerMinute = 200;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        if (minutes < 1) return '< 1 min';
        if (minutes === 1) return '1 min';
        return `${minutes} min`;
    }

    calculateSpeakingTime(wordCount) {
        const wordsPerMinute = 150;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        if (minutes < 1) return '< 1 min';
        if (minutes === 1) return '1 min';
        return `${minutes} min`;
    }

    // ==================== Frequency Analysis ====================
    
    getCharacterFrequency(text) {
        const charCount = {};
        const cleanText = text.replace(/\s/g, ''); // Exclude spaces
        
        for (const char of cleanText) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Sort by frequency and get top 5
        return Object.entries(charCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([char, count]) => ({ char, count }));
    }

    getWordFrequency(text) {
        const wordCount = {};
        const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
        
        for (const word of words) {
            if (word.length > 2) { // Only count words longer than 2 characters
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
        }

        // Sort by frequency and get top 5
        return Object.entries(wordCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([word, count]) => ({ word, count }));
    }

    updateFrequencyList(elementId, frequencyData) {
        const container = document.getElementById(elementId);
        
        if (frequencyData.length === 0) {
            container.innerHTML = '<div class="frequency-empty">No data available</div>';
            return;
        }

        const isCharFrequency = elementId === 'char-frequency';
        
        container.innerHTML = frequencyData.map(item => {
            const label = isCharFrequency ? item.char : item.word;
            return `
                <div class="frequency-item">
                    <span class="frequency-label">${this.escapeHtml(label)}</span>
                    <span class="frequency-count">${item.count}</span>
                </div>
            `;
        }).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ==================== Utility Functions ====================
    setCurrentYear() {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }

    // ==================== Status Messages ====================
    showStatus(message, type = 'info') {
        const status = document.getElementById('status');
        status.textContent = message;
        status.className = `status ${type}`;
        status.classList.remove('hidden');

        setTimeout(() => {
            status.classList.add('hidden');
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TextCounter();
});
