# PALABRA — Spanish Vocabulary Learning App

A mobile-first Spanish vocabulary trainer with Chinese and English support.

## Vocabulary library

The repository contains **exactly 7,000 Spanish vocabulary entries**:

| Level | Entries |
|---|---:|
| A1 | 500 |
| A2 | 986 |
| B1 | 2,007 |
| B2 | 3,507 |
| **Total** | **7,000** |

The level-tagged list was adapted from the community-made [CEFR Vocabulary Dataset](https://github.com/Talhakasikci/cefr-vocabulary-dataset), Spanish CSV files for A1–B2, with 32 bilingual starter entries retained. The source project describes itself as unofficial and automatically/semi-automatically compiled. It warns that CEFR labels, IPA, definitions and entries may contain gaps or errors. Some entries are inflected forms rather than dictionary headwords; therefore the app calls them vocabulary entries, not 7,000 independently verified lemmas.

## Features

- Browse and filter all 7,000 entries by CEFR level and part of speech
- English-first quizzes: Spanish → English and English → Spanish use preloaded/local cached glosses, avoiding translation API calls during each question; Chinese directions are available only for entries with a stored Chinese gloss
- IPA display and Spanish speech synthesis where supported by the device
- Favorites, mistake review, mastered-word tracking and daily progress
- On-demand meaning lookup via Wiktionary/WiktAPI where available, with MyMemory as a limited fallback; fetched translations are cached locally and are only requested when a user opens a word detail
- Spanish/English example sentences for 3,976 entries, sourced from Tatoeba; Chinese example translations are fetched on demand
- Spaced repetition (Again / Hard / Good / Easy) with due-today and upcoming review queues
- PWA metadata and service-worker caching of the vocabulary for offline access after the first successful load

## Translation and example limitations

At the current build, 2,661 entries have a preloaded English gloss and 32 have a preloaded Chinese gloss. Quizzes now use only locally available English glosses or previously cached translations; this avoids making multiple live translation requests for every question. The available English quiz pool is therefore smaller than the full 7,000-word browseable library. Additional glosses are fetched on demand from Wiktionary via WiktAPI when that edition contains a Spanish entry; MyMemory is a fallback machine-translation provider. MyMemory's anonymous free tier is limited to 5,000 characters per day, so PALABRA cannot guarantee that all missing meanings can be translated on demand in one day. Any online dictionary or machine-translation result may be ambiguous or wrong and should be checked in context.

The 32 starter entries include hand-authored Chinese/English examples. A further 3,944 entries have Spanish/English sentence pairs sourced from Tatoeba, making 3,976 example pairs in total; Chinese sentence translations are fetched on demand. These external sentences are not individually reviewed by PALABRA. The rest of the entries do not yet have matched example sentences, noun gender notes or full inflection tables.

The spaced-repetition plan schedules each word after the learner rates recall as Again, Hard, Good or Easy. Due and upcoming cards, favorites, mistakes, mastered-word records and cached translations are stored on the current device/browser. There is no account or cross-device synchronisation yet.

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
- Additional Spanish-English verb glosses: [mananoreboton/en-es-en-Dic](https://github.com/mananoreboton/en-es-en-Dic), Apache License 2.0.
- On-demand dictionary lookup: [WiktAPI](https://wiktapi.dev/), based on Wiktionary data; on-demand fallback translation: [MyMemory](https://mymemory.translated.net/).
- Example sentence pairs: Tatoeba, via [fufu70/spanish-english-json](https://github.com/fufu70/spanish-english-json), which derives them from [doozan/spanish_data](https://github.com/doozan/spanish_data). Upstream documents the sentence data as CC BY 2.0 FR and credits Tatoeba contributors CK and arh.
