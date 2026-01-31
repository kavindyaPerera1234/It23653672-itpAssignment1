const { test, expect } = require('@playwright/test');

// ---------------- Test Case Data ----------------
const testCases = [

  // -------- Positive Functional --------
  { id: 'Pos_Fun_0001', input: 'oyaa hodhin innavaadha?', type: 'S' },
  { id: 'Pos_Fun_0002', input: 'eeka gaena vaediya hithanna epaa machan', type: 'S' },
  { id: 'Pos_Fun_0003', input: 'karuNaakaralaa onna ooka mata dhenavaa', type: 'S' },
  { id: 'Pos_Fun_0004', input: 'mata mee vaeda tika heta vedhdhii ivara karanna venava mokadha anidhdhaa mata presentation thiyenavaa.', type: 'M' },
  { id: 'Pos_Fun_0005', input: 'heta 3.30 pm vedhdhi movie eka patan gannavaa.', type: 'S' },
  { id: 'Pos_Fun_0006', input: 'okkoma Lamayinta heta edhdhi RS 3000 k aran enna kiyalaa miss kivvaa', type: 'M' },
  { id: 'Pos_Fun_0007', input: 'mama giya sathiye ee assignment eka karalaa ivara karaa mokadha eeke deadline thibbe giya iridhaa', type: 'M' },
  { id: 'Pos_Fun_0008', input: 'mata podi udhavvak karanna puluvandha?', type: 'S' },
  { id: 'Pos_Fun_0009', input: 'suBhama suBha upandhinayak veevaa!!!', type: 'S' },
  { id: 'Pos_Fun_0010', input: 'mata eeka epaa', type: 'S' },
  { id: 'Pos_Fun_0011', input: '2026-02-15 udhee 9.45 am mata doctor appointment ekak thiyenavaa.', type: 'M' },
  { id: 'Pos_Fun_0012', input: 'apee gedhara idhan 20km vagee thiyenavaa town ekata.', type: 'M' },
  { id: 'Pos_Fun_0013', input: 'oyaa mobile app eka download karalaa URL eka open karanna.', type: 'M' },
  { id: 'Pos_Fun_0014', input: 'karuNaakaralaa magee report eka Email karanna..', type: 'M' },
  { id: 'Pos_Fun_0015', input: 'oyaata dhaen kohomadha\nhodhin innavadha?', type: 'M' },
  { id: 'Pos_Fun_0016', input: 'ela machan, hari siraa vaedak ne?', type: 'S' },
  { id: 'Pos_Fun_0017', input: 'adoo ehema karanna epaa ban', type: 'S' },
  { id: 'Pos_Fun_0018', input: 'dhesaembar 25 mata party ekak thiyenavaa', type: 'S' },
  { id: 'Pos_Fun_0019', input: 'mama    heta    rata    yanavaa', type: 'S' },
  { id: 'Pos_Fun_0020', input: 'mama heta vaesse naethi unoth Kandy yanavaa', type: 'M' },
  { id: 'Pos_Fun_0021', input: 'vikaara nan karanna epaa', type: 'S' },
  { id: 'Pos_Fun_0022', input: 'oyaa innavaa nan inna mama yanavaa', type: 'M' },
  { id: 'Pos_Fun_0023', input: 'anee mata samavenna.', type: 'S' },

  // -------- Positive UI --------
  { id: 'Pos_UI_0001', input: 'api igena gannavaa.', type: 'S' },

  // -------- Negative Functional --------
  { id: 'Neg_Fun_0001', input: 'api het a trip ek ak ya na vaa', type: 'S' },
  { id: 'Neg_Fun_0002', input: 'oyaata dhaen kohomadha\n\nhodhin innavadha?', type: 'M' },
  { id: 'Neg_Fun_0003', input: 'mama @@## gaNan hadhanavaa', type: 'S' },
  { id: 'Neg_Fun_0004', input: 'Adha apita moNavath vaEdak thiBBee naee', type: 'M' },
  { id: 'Neg_Fun_0005', input: 'mama XyZ gedhara yanavaa', type: 'S' },
  { id: 'Neg_Fun_0006', input: 'vaessa nae mama yanavaa', type: 'M' },
  { id: 'Neg_Fun_0007', input: 'mama mama mama heta yanavaa', type: 'M' },
  { id: 'Neg_Fun_0008', input: 'oyaa mata help karannada', type: 'S' },
  { id: 'Neg_Fun_0009', input: 'mama gedhara yanavaa mama sick', type: 'M' },

  // -------- Negative UI --------
  { id: 'Neg_UI_0001', input: 'ma udhe kale coffee ekak bonavaa, passe office yanavaa', type: 'M' },
];

// ---------------- Test Suite ----------------
test.describe.serial('Swift Translator – Full Excel Coverage', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded',
    });
  });

  for (const tc of testCases) {
    test(tc.id, async () => {
      const inputArea = page.locator('textarea').first();
      const outputArea = page.locator('textarea').last();
      const clearBtn = page.locator('button:has-text("Clear")');

      // Ensure clear button visible
      await expect(clearBtn).toBeVisible();

      // Clear previous input
      await clearBtn.click();
      await page.waitForTimeout(300);

      // Type input slowly
      for (const ch of tc.input) {
        await inputArea.type(ch, { delay: 40 });
      }

      // Wait for translation
      await page.waitForTimeout(tc.type === 'M' ? 1500 : 1000);

      // Assertion: Output should not be empty
      await expect(outputArea).not.toHaveValue('');

      console.log(` ${tc.id} executed`);
    });
  }

  // -------- Clear Button Test --------
  test('UI_Clear_Button_Functionality', async () => {
    const inputArea = page.locator('textarea').first();
    const clearBtn = page.locator('button:has-text("Clear")');

    await inputArea.fill('Testing clear button');
    await clearBtn.click();

    await expect(inputArea).toHaveValue('');
  });

  test.afterAll(async () => {
    await page.close();
  });
});