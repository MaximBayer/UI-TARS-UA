<picture>
  <img alt="Agent TARS Banner" src="./images/tars.png">
</picture>

<br/>

## Вступ

[![](https://trendshift.io/api/badge/repositories/13584)](https://trendshift.io/repositories/13584)

<b>TARS<sup>\*</sup></b> - це стек мультимодального AI Agent, який наразі включає два проекти: [Agent TARS](#agent-tars) та [UI-TARS-desktop](#ui-tars-desktop):

<table>
  <thead>
    <tr>
      <th width="50%" align="center"><a href="#agent-tars">Agent TARS</a></th>
      <th width="50%" align="center"><a href="#ui-tars-desktop">UI-TARS-desktop</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/c9489936-afdc-4d12-adda-d4b90d2a869d" width="50%"></video>
      </td>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/e0914ce9-ad33-494b-bdec-0c25c1b01a27" width="50%"></video>
      </td>
    </tr>
    <tr>
      <td align="left">
        <b>Agent TARS</b> - це універсальний стек мультимодального AI Agent, який приносить потужність GUI Agent та Vision у ваш термінал, комп'ютер, браузер та продукт.
        <br>
        <br>
        Він в першу чергу постачається з <a href="https://agent-tars.com/guide/basic/cli.html" target="_blank">CLI</a> та <a href="https://agent-tars.com/guide/basic/web-ui.html" target="_blank">Web UI</a> для використання.
        Він має на меті забезпечити робочий процес, який є ближчим до людського виконання завдань через передові мультимодальні LLM та безшовну інтеграцію з різними інструментами <a href="https://agent-tars.com/guide/basic/mcp.html" target="_blank">MCP</a>.
      </td>
      <td align="left">
        <b>UI-TARS Desktop</b> - це десктопний додаток, який надає нативний GUI Agent на основі моделі <a href="https://github.com/bytedance/UI-TARS" target="_blank">UI-TARS</a>.
        <br>
        <br>
        Він в першу чергу постачається з
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#get-model-and-run-local-operator" target="_blank">локальним</a> та 
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#run-remote-operator" target="_blank">віддаленим</a> операторами комп'ютера, а також операторами браузера.
      </td>
    </tr>
  </tbody>
</table>

## Зміст

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Новини](#новини)
- [Українська локалізація](#українська-локалізація)
- [Agent TARS](#agent-tars)
  - [Демонстрація](#демонстрація)
  - [Основні функції](#основні-функції)
  - [Швидкий старт](#швидкий-старт)
  - [Документація](#документація)
- [UI-TARS Desktop](#ui-tars-desktop)
  - [Демонстрація](#демонстрація-1)
  - [Функції](#функції)
  - [Швидкий старт](#швидкий-старт-1)
- [Участь у розробці](#участь-у-розробці)
- [Ліцензія](#ліцензія)
- [Цитування](#цитування)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Новини

- **\[2025-11-05\]** 🎉 Ми раді оголосити про випуск [Agent TARS CLI v0.3.0](https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.3.0)! Ця версія приносить підтримку потокової передачі для кількох інструментів, налаштування часу виконання зі статистикою для викликів інструментів, Event Stream Viewer та ексклюзивну підтримку [AIO agent Sandbox](https://github.com/agent-infra/sandbox).
- **\[2025-06-25\]** Ми випустили Agent TARS Beta та Agent TARS CLI - [Представляємо Agent TARS Beta](https://agent-tars.com/blog/2025-06-25-introducing-agent-tars-beta.html), мультимодальний AI агент, який має на меті дослідити форму роботи, ближчу до людського виконання завдань.
- **\[2025-06-12\]** - 🎁 Ми раді оголосити про випуск UI-TARS Desktop v0.2.0! Це оновлення представляє дві потужні нові функції: **Віддалений оператор комп'ютера** та **Віддалений оператор браузера** — обидві повністю безкоштовні.
- **\[2025-04-17\]** - 🎉 Ми раді оголосити про випуск нового додатку UI-TARS Desktop v0.1.0 з переробленим Agent UI. Додаток покращує досвід використання комп'ютера, вводить нові функції роботи з браузером та підтримує [розширену модель UI-TARS-1.5](https://seed-tars.com/1.5).
- **\[2025-02-20\]** - 📦 Представлений [UI TARS SDK](./docs/sdk.md) - потужний крос-платформний інструментарій для побудови агентів автоматизації GUI.
- **\[2025-01-23\]** - 🚀 Ми оновили розділ **[Хмарне розгортання](./docs/deployment.md#cloud-deployment)** з новою інформацією про платформу ModelScope.

<br>

## Українська локалізація

🇺🇦 **UI-TARS Desktop тепер повністю підтримує українську мову!**

### Що було змінено:

#### ✅ Інтерфейс користувача
- **Повністю перекладені всі компоненти UI:**
  - Головна сторінка та панель навігації
  - Всі діалогові вікна та модальні форми
  - Налаштування (Settings) та всі його категорії
  - Бічна панель (History, Share, Navigation)
  - Повідомлення та toast-нотифікації
  - Кнопки, підказки та placeholder-и

#### ✅ VLM (Vision-Language Model)
- **Мова виводу VLM змінена на українську:**
  - Модель тепер відповідає українською мовою
  - Системні промпти оновлені для української мови
  - Підтримка тільки української мови (`uk`) замість англійської/китайської
  - Приклади в промптах адаптовані для української мови

#### ✅ Налаштування та конфігурація
- **Мова за замовчуванням:** Українська
- **Доступні мови:** Тільки українська (китайська та англійська видалені з вибору)
- **Валідація:** Всі схеми Zod оновлені для підтримки української мови

#### 📁 Змінені файли:
```
Основні компоненти:
├── apps/ui-tars/src/main/
│   ├── store/setting.ts          # Мова за замовчуванням: 'uk'
│   ├── store/validate.ts         # Enum мов: ['uk']
│   ├── utils/agent.ts            # Тип мови VLM: 'uk'
│   └── agent/prompts.ts          # Українські промпти VLM

Компоненти UI:
├── apps/ui-tars/src/renderer/src/
│   ├── pages/
│   │   ├── home/index.tsx        # Головна сторінка
│   │   └── settings/             # Налаштування
│   ├── components/
│   │   ├── Settings/             # Діалоги налаштувань
│   │   │   ├── global.tsx
│   │   │   ├── local.tsx
│   │   │   ├── remote.tsx
│   │   │   └── category/         # Категорії налаштувань
│   │   ├── SideBar/              # Бічна панель
│   │   ├── AlertDialog/          # Діалогові вікна
│   │   ├── ChatInput/            # Введення повідомлень
│   │   └── RunMessages/          # Повідомлення виконання
```

### Використання:

Просто запустіть додаток - українська мова вже встановлена за замовчуванням! 🎉

```bash
cd E:\UI-TARS-desktop
pnpm install
pnpm dev:ui-tars
```

<br>

## Agent TARS

<p>
    <a href="https://npmjs.com/package/@agent-tars/cli?activeTab=readme"><img src="https://img.shields.io/npm/v/@agent-tars/cli?style=for-the-badge&colorA=1a1a2e&colorB=3B82F6&logo=npm&logoColor=white" alt="npm version" /></a>
    <a href="https://npmcharts.com/compare/@agent-tars/cli?minimal=true"><img src="https://img.shields.io/npm/dm/@agent-tars/cli.svg?style=for-the-badge&colorA=1a1a2e&colorB=0EA5E9&logo=npm&logoColor=white" alt="downloads" /></a>
    <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/@agent-tars/cli.svg?style=for-the-badge&colorA=1a1a2e&colorB=06B6D4&logo=node.js&logoColor=white" alt="node version"></a>
    <a href="https://discord.gg/HnKcSBgTVx"><img src="https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Community" /></a>
    <a href="https://twitter.com/agent_tars"><img src="https://img.shields.io/badge/Twitter-Follow%20%40agent__tars-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Official Twitter" /></a>
</p>

<b>Agent TARS</b> - це універсальний стек мультимодального AI Agent, який приносить потужність GUI Agent та Vision у ваш термінал, комп'ютер, браузер та продукт. <br> <br>
Він в першу чергу постачається з <a href="https://agent-tars.com/guide/basic/cli.html" target="_blank">CLI</a> та <a href="https://agent-tars.com/guide/basic/web-ui.html" target="_blank">Web UI</a> для використання.
Він має на меті забезпечити робочий процес, який є ближчим до людського виконання завдань через передові мультимодальні LLM та безшовну інтеграцію з різними інструментами <a href="https://agent-tars.com/guide/basic/mcp.html" target="_blank">MCP</a>.

### Демонстрація

```
Будь ласка, допоможіть мені забронювати найраніший рейс із Сан-Хосе до Нью-Йорка 1 вересня та останній зворотний рейс 6 вересня на Priceline
```

https://github.com/user-attachments/assets/772b0eef-aef7-4ab9-8cb0-9611820539d8

<br>

### Основні функції

- 🖱️ **CLI в один клік** - Підтримує як **headful** [Web UI](https://agent-tars.com/guide/basic/web-ui.html), так і **headless** [сервер](https://agent-tars.com/guide/advanced/server.html) [виконання](https://agent-tars.com/guide/basic/cli.html).
- 🌐 **Гібридний браузерний агент** - Керування браузерами за допомогою [GUI Agent](https://agent-tars.com/guide/basic/browser.html#visual-grounding), [DOM](https://agent-tars.com/guide/basic/browser.html#dom) або гібридної стратегії.
- 🔄 **Event Stream** - Event Stream, керований протоколом, забезпечує [Context Engineering](https://agent-tars.com/beta#context-engineering) та [Agent UI](https://agent-tars.com/blog/2025-06-25-introducing-agent-tars-beta.html#easy-to-build-applications).
- 🧰 **Інтеграція MCP** - Ядро побудоване на MCP та також підтримує монтування [MCP Servers](https://agent-tars.com/guide/basic/mcp.html) для підключення до реальних інструментів.

### Швидкий старт

<img alt="Agent TARS CLI" src="https://agent-tars.com/agent-tars-cli.png">

```bash
# Запуск за допомогою `npx`.
npx @agent-tars/cli@latest

# Глобальне встановлення, потрібен Node.js >= 22
npm install @agent-tars/cli@latest -g

# Запуск з вашим провайдером моделі
agent-tars --provider volcengine --model doubao-1-5-thinking-vision-pro-250428 --apiKey ваш-api-ключ
agent-tars --provider anthropic --model claude-3-7-sonnet-latest --apiKey ваш-api-ключ
```

Відвідайте повний посібник [Швидкий старт](https://agent-tars.com/guide/get-started/quick-start.html) для детальних інструкцій з налаштування.

### Документація

> 🌟 **Досліджуйте всесвіт Agent TARS** 🌟

<table>
  <thead>
    <tr>
      <th width="20%" align="center">Категорія</th>
      <th width="30%" align="center">Посилання на ресурс</th>
      <th width="50%" align="left">Опис</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">🏠 <strong>Центральний хаб</strong></td>
      <td align="center">
        <a href="https://agent-tars.com">
          <img src="https://img.shields.io/badge/Visit-Website-4F46E5?style=for-the-badge&logo=globe&logoColor=white" alt="Website" />
        </a>
      </td>
      <td align="left">Ваш шлюз до екосистеми Agent TARS</td>
    </tr>
    <tr>
      <td align="center">📚 <strong>Швидкий старт</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/guide/get-started/quick-start.html">
          <img src="https://img.shields.io/badge/Get-Started-06B6D4?style=for-the-badge&logo=rocket&logoColor=white" alt="Quick Start" />
        </a>
      </td>
      <td align="left">Від нуля до героя за 5 хвилин</td>
    </tr>
    <tr>
      <td align="center">🚀 <strong>Що нового</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/beta">
          <img src="https://img.shields.io/badge/Read-Blog-F59E0B?style=for-the-badge&logo=rss&logoColor=white" alt="Blog" />
        </a>
      </td>
      <td align="left">Відкрийте передові функції та бачення</td>
    </tr>
    <tr>
      <td align="center">🛠️ <strong>Зона розробника</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/guide/get-started/introduction.html">
          <img src="https://img.shields.io/badge/View-Docs-10B981?style=for-the-badge&logo=gitbook&logoColor=white" alt="Docs" />
        </a>
      </td>
      <td align="left">Освойте кожну команду та функцію</td>
    </tr>
    <tr>
      <td align="center">🎯 <strong>Демонстрація</strong></td>
      <td align="center">
        <a href="https://github.com/bytedance/UI-TARS-desktop/issues/842">
          <img src="https://img.shields.io/badge/View-Examples-8B5CF6?style=for-the-badge&logo=github&logoColor=white" alt="Examples" />
        </a>
      </td>
      <td align="left">Перегляньте приклади використання від офіційної команди та спільноти</td>
    </tr>
    <tr>
      <td align="center">🔧 <strong>Довідка</strong></td>
      <td align="center">
        <a href="https://agent-tars.com/api/">
          <img src="https://img.shields.io/badge/API-Reference-EF4444?style=for-the-badge&logo=book&logoColor=white" alt="API" />
        </a>
      </td>
      <td align="left">Повна технічна довідка</td>
    </tr>
  </tbody>
</table>

<br/>
<br/>
<br/>

## UI-TARS Desktop

<p align="center">
  <img alt="UI-TARS" width="260" src="./apps/ui-tars/resources/icon.png">
</p>

UI-TARS Desktop - це нативний GUI агент для вашого локального комп'ютера, керований моделями [UI-TARS](https://github.com/bytedance/UI-TARS) та серії Seed-1.5-VL/1.6.

<div align="center">
<p>
        &nbsp&nbsp 📑 <a href="https://arxiv.org/abs/2501.12326">Стаття</a> &nbsp&nbsp
        | 🤗 <a href="https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B">Моделі Hugging Face</a>&nbsp&nbsp
        | &nbsp&nbsp🫨 <a href="https://discord.gg/pTXwYVjfcs">Discord</a>&nbsp&nbsp
        | &nbsp&nbsp🤖 <a href="https://www.modelscope.cn/collections/UI-TARS-bccb56fa1ef640">ModelScope</a>&nbsp&nbsp
<br>
🖥️ Десктопний додаток &nbsp&nbsp
| &nbsp&nbsp 👓 <a href="https://github.com/web-infra-dev/midscene">Midscene (використання в браузері)</a> &nbsp&nbsp
</p>

</div>

### Демонстрація

|                                                            Інструкція                                                             |                                                Локальний оператор                                                |                                               Віддалений оператор                                                |
| :-------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| Будь ласка, допоможіть мені увімкнути функцію автозбереження VS Code та встановити затримку операцій AutoSave на 500 мілісекунд. | <video src="https://github.com/user-attachments/assets/e0914ce9-ad33-494b-bdec-0c25c1b01a27" height="300" /> | <video src="https://github.com/user-attachments/assets/01e49b69-7070-46c8-b3e3-2aaaaec71800" height="300" /> |
|                   Чи могли б ви допомогти мені перевірити останню відкриту проблему проекту UI-TARS-Desktop на GitHub?                    | <video src="https://github.com/user-attachments/assets/3d159f54-d24a-4268-96c0-e149607e9199" height="300" /> | <video src="https://github.com/user-attachments/assets/072fb72d-7394-4bfa-95f5-4736e29f7e58" height="300" /> |

### Функції

- 🤖 Керування природною мовою на базі Vision-Language Model
- 🖥️ Підтримка скріншотів та візуального розпізнавання
- 🎯 Точне керування мишею та клавіатурою
- 💻 Крос-платформна підтримка (Windows/MacOS/Browser)
- 🔄 Зворотній зв'язок у реальному часі та відображення статусу
- 🔐 Приватний та безпечний - повністю локальна обробка
- 🇺🇦 **Повна підтримка української мови**

### Швидкий старт

Дивіться [Швидкий старт](./docs/quick-start.md)

## Участь у розробці

Дивіться [CONTRIBUTING.md](./CONTRIBUTING.md).

## Ліцензія

Цей проект ліцензовано під Apache License 2.0.

## Цитування

Якщо ви вважаєте нашу статтю та код корисними у вашому дослідженні, будь ласка, розгляньте можливість поставити зірку :star: та цитування :pencil:

```BibTeX
@article{qin2025ui,
  title={UI-TARS: Pioneering Automated GUI Interaction with Native Agents},
  author={Qin, Yujia and Ye, Yining and Fang, Junjie and Wang, Haoming and Liang, Shihao and Tian, Shizuo and Zhang, Junda and Li, Jiahao and Li, Yunxin and Huang, Shijue and others},
  journal={arXiv preprint arXiv:2501.12326},
  year={2025}
}
```
