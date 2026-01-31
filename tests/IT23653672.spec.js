const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert informal greeting question',
      input: 'oyaa hodhin innavaadha?',
      expected: 'ඔයා හොදින් ඉන්නවාද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert informal advice sentence',
      input: 'eeka gaena vaediya hithanna epaa machan',
      expected: 'ඒක ගැන වැඩිය හිතන්න එපා මචන්',
      category: 'Slang / informal language',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert polite informal statement',
      input: 'karuNaakaralaa onna ooka mata dhenavaa',
      expected: 'කරුණාකරලා ඔන්න ඕක මට දෙනවා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Convert complex future & oriented explanation',
      input: 'mata mee vaeda tika heta vedhdhii ivara karanna venava mokadha anidhdhaa mata presentation thiyenavaa.',
      expected: 'මට මේ වැඩ ටික හෙට වෙද්දී ඉවර කරන්න වෙනව මොකද අනිද්දා මට presentation තියෙනවා.',
      category: 'Mixed Singlish + English',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    {
      tcId: 'Pos_Fun_0005',
      name: 'Convert sentence with time format',
      input: 'heta 3.30 pm vedhdhi movie eka patan gannavaa.',
      expected: 'හෙට 3.30 pm වෙද්දි movie එක පටන් ගන්නවා.',
      category: 'Punctuation / numbers',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert plural instruction with currency',
      input: 'okkoma Lamayinta heta edhdhi RS 3000 k aran enna kiyalaa miss kivvaa',
      expected: 'ඔක්කොම ළමයින්ට හෙට එද්දි RS 3000 ක් අරන් එන්න කියලා miss කිව්වා',
      category: 'Punctuation / numbers',
      grammar: 'Plural form',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0007',
      name: 'Convert past tense explanation sentence with mixed english+ sinhala',
      input: 'mama giya sathiye ee assignment eka karalaa ivara karaa mokadha eeke deadline thibbe giya iridhaa',
      expected: 'මම ගිය සතියෙ ඒ assignment එක කරලා ඉවර කරා මොකද ඒකෙ deadline තිබ්බෙ ගිය ඉරිදා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert polite request question',
      input: 'mata podi udhavvak karanna puluvandha?',
      expected: 'මට පොඩි උදව්වක් කරන්න පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert greeting with emphasis and punctuation',
      input: 'suBhama suBha upandhinayak veevaa!!!',
      expected: 'සුභම සුභ උපන්දිනයක් වේවා!!!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert simple negative sentence',
      input: 'mata eeka epaa',
      expected: 'මට ඒක එපා',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Convert sentence with date and time format',
      input: '2026-02-15 udhee 9.45 am mata doctor appointment ekak thiyenavaa.',
      expected: '2026-02-15 උදේ 9.45 am මට doctor appointment එකක් තියෙනවා.',
      category: 'Punctuation / numbers',
      grammar: 'Present tense',
      length: 'M'
    },
    
     {
      tcId: 'Pos_Fun_0012',
      name: 'Convert sentence with distance unit',
      input: 'apee gedhara idhan 20km vagee thiyenavaa town ekata.',
      expected: 'අපේ ගෙදර ඉදන් 20km වගේ තියෙනවා town එකට.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert sentence with APP and URL terms',
      input: 'oyaa mobile app eka download karalaa URL eka open karanna.',
      expected: 'ඔයා mobile app එක download කරලා URL එක open කරන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'English technical/brand terms embedded in Singlish',
      input: 'karuNaakaralaa magee report eka Email karanna.',
      expected: 'කරුණාකරලා මගේ report එක Email කරන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
     {
      tcId: 'Pos_Fun_0015',
      name: 'Convert multi-line input with line breaks',
      input: 'oyaata dhaen kohomadha\nhodhin innavadha?',
      expected: 'ඔයාට දැන් කොහොමද\nහොදින් ඉන්නවද?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
     {
      tcId: 'Pos_Fun_0016',
      name: 'Convert informal / colloquial phrasings',
      input: 'ela machan, hari siraa vaedak ne?',
      expected: 'එල මචන්, හරි සිරා වැඩක් නේ?',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert informal / colloquial phrasings',
      input: 'adoo ehema karanna epaa ban',
      expected: 'අඩෝ එහෙම කරන්න එපා බන්',
      category: 'Slang / informal language',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
     {
      tcId: 'Pos_Fun_0018',
      name: 'Convert sentence with Sinhala month date',
      input: 'dhesaembar 2 mata party ekak thiyenavaa',
      expected: 'දෙසැම්බර් 2 මට party එකක් තියෙනවා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Convert sentence with multiple spaces',
      input: 'mama    heta    rata    yanavaa',
      expected: 'මම    හෙට    රට    යනවා',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
     {
      tcId: 'Pos_Fun_0020',
      name: 'Convert conditional sentence with place name',
      input: 'mama heta vaesse naethi unoth Kandy yanavaa',
      expected: 'මම හෙට වැස්සෙ නැති උනොත් Kandy යනවා',
      category: 'Names / places / common English words',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Convert negative command / prohibition',
      input: 'vikaara nan karanna epaa',
      expected: 'විකාර නන් කරන්න එපා',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Convert conditional compound sentence',
      input: 'oyaa innavaa nan inna mama yanavaa',
      expected: 'ඔයා ඉන්නවා නන් ඉන්න මම යනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0023',
      name: 'Convert polite apology phrase',
      input: 'anee mata samavenna.',
      expected: 'අනේ මට සමවෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
   negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Excessive spacing breaks words',
      input: 'api het a trip ek ak ya na vaa',
      expected: 'අපි හෙට trip එකක් යනවා',
      category: 'Formatting (spaces)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Excessive line breaks',
      input: 'oyaata dhaen kohomadha\n\nhodhin innavadha?',
      expected: 'ඔයාට දැන් කොහොමද\nහොදින් ඉන්නවද?',
      category: 'Formatting (line breaks)',
      grammar: 'Interrogative',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Repeated symbols',
      input: 'mama @@## gaNan hadhanavaa',
      expected: 'මම ගණන් හදනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Mixed capitalization',
      input: 'Adha apita moNavath vaEdak thiBBee naee',
      expected: 'අද අපිට මොනවත් වැඩක් තිබ්බේ නෑ',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Real-time Sinhala output update failure',
      input: 'mama XyZ gedhara yanavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Conditional without connector',
      input: 'vaessa nae mama yanavaa',
      expected: 'වැස්ස නැත්නම් මම යනවා',
      category: 'Negation / compound sentence',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Repeated word overuse',
      input: 'mama mama mama heta yanavaa',
      expected: 'මම හෙට යනවා',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Incorrect polite form handling',
      input: 'oyaa mata help karannada',
      expected: 'ඔයා මට help කරන්නද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Causal connector missing',
      input: 'mama gedhara yanavaa mama sick',
      expected: 'මම sick නිසා ගෙදර යනවා',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    }
  ],
   ui: {
    tcId: 'Neg_UI_0001',
    name: 'Output does not update after paste action',
    input: 'ma udhe kale coffee ekak bonavaa, passe office yanavaa',
    expectedFull: 'Sinhala output should appear immediately after pasting text',
    category: 'Real-time output update behavior',
    grammar: 'Compound sentence',
    length: 'M'
  }
};
// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});