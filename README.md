# PALABRA — Spanish Vocabulary Learning App

A mobile-first Spanish vocabulary trainer with Chinese and English support.

## Vocabulary library

The repository contains **exactly 7,000 Spanish vocabulary entries**:

| Level | Entries |
|---|---:|
| A1 | 500 |
| A2 | 992 |
| B1 | 2,009 |
| B2 | 3,499 |
| **Total** | **7,000** |

The level-tagged list was adapted from the community-made [CEFR Vocabulary Dataset](https://github.com/Talhakasikci/cefr-vocabulary-dataset), Spanish CSV files for A1–B2, with 32 bilingual starter entries retained. The source project describes itself as unofficial and automatically/semi-automatically compiled. It warns that CEFR labels, IPA, definitions and entries may contain gaps or errors. Some entries are inflected forms rather than dictionary headwords; therefore the app calls them vocabulary entries, not 7,000 independently verified lemmas.

## Features

- Browse and filter all 7,000 entries by CEFR level and part of speech
- Quiz directions: Spanish → Chinese, Spanish → English, Chinese → Spanish, English → Spanish
- IPA display and Spanish speech synthesis where supported by the device
- Favorites, mistake review, mastered-word tracking and daily progress
- On-demand bilingual meaning lookup; fetched translations are cached locally
- PWA metadata and service-worker caching of the vocabulary for offline access after the first successful load

## Translation and example limitations

Only entries with source or starter-set glosses have a preloaded meaning. For other entries, PALABRA requests a translation when needed and saves it in the browser's local storage. This lookup depends on an external translation service and internet access; machine translations can be ambiguous or wrong. Only the 32 starter entries currently include hand-authored bilingual examples. The rest of the entries do not yet have individually reviewed example sentences, gender notes or full inflection tables.

Learning progress and cached translations are stored on the current device/browser. There is no account or cross-device synchronisation yet.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then click **Save**.
4. Wait for the Pages URL to appear.

## iPhone

Open the published HTTPS URL in Safari → Share → Add to Home Screen.

## Data attribution

- Spanish CEFR list: [Talhakasikci/cefr-vocabulary-dataset](https://github.com/Talhakasikci/cefr-vocabulary-dataset). See its README for the stated personal/educational-use terms and limitations.
- Starter bilingual words and examples: PALABRA project content.
