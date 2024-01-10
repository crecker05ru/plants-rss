# Plants

## Описание проекта

Plants – задание stage#0 в ходе выполнения которого вы сверстаете landing page сайта, который предлагает свои услуги по выращиванию растений в саду и ухода за ними, сделаете его адаптивным и интерактивным.

## Ключевые навыки:

- валидная семантическая адаптивная вёрстка
- легкоподдерживаемый читаемый код
- экспорт стилей и графики из Figma
- использование JavaScript для реализации указанного в задании функционала

## Этапы работы над проектом:

Задание состоит из трёх частей:

- Часть 1. Фиксированная вёрстка
  - [Требования и критерии оценки](plants-part1.md)
  - в этой части задания необходимо сверстать страницу по макету, которая корректно отображается при ширине экрана не меньше 1440рх
  - проверяется валидность и семантичность вёрстки, её совпадение с макетом
  - примерное время выполнения - 20 часов
- Часть 2. Адаптивная вёрстка
  - [Требования и критерии оценки](plants-part2.md)
  - в этой части задания необходимо добавить адаптивность свёрстанной странице. При ширине страницы 768px и 380px ставится задача совпадения вёрстки с макетом, на остальных разрешениях до 320рх включительно достаточно обеспечить отсутствие горизонтальной полосы прокрутки.  
    Также на этом этапе в вёрстку добавляется адаптивное меню, для создания которого используется js.
  - проверяется совпадения вёрстки с макетом при ширине страницы 768px и 380рх, отсутствие горизонтальной полосы прокрутки, работа адаптивного меню
  - примерное время выполнения - 15 часов
- Часть 3. Добавление функционала
  - [Требования и критерии оценки](plants-part3.md)
  - в этой части задания используем JavaScript для добавления странице интерактивности:
    - Смена фокуса на услугах в секции "Service and our projects"
    - Accordion в секции prices
    - Реализуете кастомный select в разделе "Contacts"
  - проверяется реализованный функционал
  - примерное время выполнения - 15 часов

Продолжительность выполнения каждой части задания - 2 недели  
Форма проверки каждой части задания - кросс-чек

[Макет в figma](https://www.figma.com/file/ntVt8IwlwzfVFMBuVVAze8/Plants?node-id=0%3A1)

## Создание собственной копии макета

Выполнение задания начните с создания собственной копии макета. Для этого

- авторизуемся в [figma](https://www.figma.com/)
- открываем макет
- на панели вверху нажимаем на стрелку рядом с названием макета, выбираем пункт "Duplicate to your drafts"
- слева вверху открываем настройки, выбираем "Back to files"
- открываем копию макета рядом с которой есть надпись "In Drafts"

## Структура макета:

- Макет состоит из трёх основных блоков: `<header>`, `<main>`, `<footer>`
- на данном макете есть 5 `<section>`:
  - `welcome`
  - `about`
  - `service`
  - `prices`
  - `contacts`
- для позиционирования `footer` и `header` допускается объединение с ближайшей секцией в обертку с общим фоном

## Рекомендации по вёрстке отдельных блоков

- Для `<header>` не используйте позиционирование `fixed` и `sticky`, так как это затруднит проверку макета, старайтесь не использовать позиционирование `absolute`

## Рекомендации по качеству кода

Рекомендации предлагаются для ознакомления, их строгое соблюдение на этапе stage#0 - stage#1 не предполагается и не проверяется

- гайдлайн https://codeguide.academy/html-css.html#html
- руководство по качеству кода
  - [общие принципы](../../stage1/modules/clean-code/materials/generic-principles.md)
  - [HTML и CSS рекомендации - начальный уровень](../../stage1/modules/clean-code/materials/html-and-css.md)
  - [HTML и CSS рекомендации - продвинутый уровень](../../stage1/modules/clean-code/materials/html-and-css-extended.md)

## Технические требования

1. вёрстка валидная, семантическая, соответствующая макету
2. приложение корректно отображается и работает в браузере Google Chrome последней версии
3. запрещается использование CSS-фреймворков (`bootstrap`)
4. допускается использование CSS-препроцессоров (`Sass`), `normalize.css`
5. не рекомендуется использовать сброс стилей при помощи `reset.css`
6. запрещено добавление вёрстки картинкой, когда делается скрин части макета и вставляется в вёрстку. Для вёрстки используйте теги и символы, картинками можно добавлять изображения и иконки, а не элементы вёрстки (кнопки, блоки, секции)

## Требования к репозиторию

- задание выполняется в приватном репозитории школы. [Как работать с приватным репозиторием школы](https://docs.rs.school/#/private-repository)
- если у вас не создаётся приватный репозиторий школы, задание можно выполнять в личном приватном репозитории
- от ветки `main` создайте ветку `plants` в ней создайте папку `plants`, в ней разместите файлы проекта
- для деплоя используйте `gh-pages` [Как сделать деплой задания из приватного репозитория школы](https://docs.rs.school/#/private-repository?id=Как-сделать-деплой-задания-из-приватного-репозитория-школы)
- если не можете для деплоя использовать `gh-pages`, используйте https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- так как задача делится на три части plants будет иметь три версии:
  1.  ветка `plants` будет содержать первую часть задания, приступая ко второй части создайте ветку `plants-part2` от ветки `plants` что позволит продолжить с того же места, на котором вы остановились в первой части
  2.  по завершении выполнения второй части задания создайте Pull Request из ветки `plants-part2` в ветку `plants`, проверьте на конфликты и сделайте Merge
  3.  для третьей части выполнить первые 2 пункта еще раз но с другим названием ветки (`plants-part3`)

## Требования к коммитам

- История коммитов должна отображать процесс разработки приложения.
- [Названия коммитов дайте согласно гайдлайну](https://docs.rs.school/#/git-convention)

## Требования к Pull Request

- Название Pull Request дайте по названию задания
- [Описание Pull Request дайте по схеме](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)  
  **Мержить Pull Request из ветки разработки в ветку `main` не нужно**.

## Чтобы получить баллы за задание необходимо:

- Выполнить задание \*
- Засабмитить задание т.е. отправить его на проверку \*\*
- Если задание проверяется в ходе кросс-чека, проверить все присланные на проверку работы и засабмитить результаты проверки до дедлайна кросс-чека \*\*\*

\* \*Весь код проекта вам необходимо написать самостоятельно, только так можно чему-то научиться.  
Копирование чужого кода (`Ctrl + C`, `Ctrl + V`) на курсе запрещено.  
\*\* _Засабмитить задание можно только до дедлайна таска, после дедлайна сабмит недоступен_  
\*\*\* _Сабмит результатов кросс-чек проверки доступен и после дедлайна кросс-чека, но на оценки проверяющего и проверяемых не влияет_

## Как сабмитить задание

После выдачи таска, но до наступления дедлайна зайдите в rs app https://app.rs.school/, выберите **Cross-Check: Submit**, в выпадающем списке выберите таск, в названии которого есть слово `plants`, в поле **Solution URL** добавьте ссылку на задеплоенную версию созданного вами сайта, нажмите кнопку **Submit**.

## Рекомендации по сабмиту

- Засабмитить задание рекомендуется как можно раньше, как только в rs app появится такая возможность. После сабмита задание можно продолжать выполнять до самого дедлайна
- Так как проект выполняется в приватном репозитории, сабмитить ссылку на репозиторий или pull request нет смысла - проверяющий его не увидит. Приватный репозиторий школы видите только вы сами, админы курса, и увидят ваши менторы, когда они появятся
- Убедитесь, что задеплоенная вами ссылка открывается в режиме инкогнито браузера
- Сделайте скриншот засабмиченной ссылки и сохраняйте его у себя до старта кросс-чека. Если вам не придут работы на проверку, скриншот послужит доказательством, что вы вовремя засабмитили ссылку на работу. В таком случае вашу работу проверят в ходе апелляции

## Проверка задания

- форма проверки каждой части задания - кросс-чек
- инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow

## Материалы

- [Старт в Figma для верстальщика](https://htmlacademy.ru/blog/html/figma)
- [Инструкция по работе в Figma для верстальщика](https://breezzly.ru/guides/start-v-figma-dlya-verstalshhika)
- [Верстка сайта с нуля из Figma](https://www.youtube.com/playlist?list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--)

## Вебинары RS School

- вебинары Сергея Шаляпина
  - [Stream 11.02.2020](https://youtu.be/UQavTWiTpnA)
  - [Stream 03.03.2020](https://youtu.be/PhRVJC0kBGE)
  - [Stream 10.03.2020](https://youtu.be/_5f0kznOM_A)
  - [Stream 17.03.2020](https://youtu.be/0M9Rz-wXYas)
  - [Stream 26.03.2020](https://youtu.be/fFDw7AH2OXo)
- вебинары Виктории Ворожун
  - [Friday Live Coding. Part 1](https://youtu.be/ZAde-IJAHzo)
  - [Friday Live Coding. Part 2](https://youtu.be/BJENQIX2e2o)
  - [Friday Live Coding. Part 3](https://youtu.be/fooyYgIuZe8)
  - [Friday Live Coding. Part 4](https://youtu.be/Qk2UGlFNKPE)
  - [Friday Live Coding. Part 5](https://youtu.be/ouZnGUefneQ)
  - [Friday Live Coding. Part 6](https://youtu.be/Ji52SxpEnxc)
  - [Репозиторий с кодом](https://github.com/ViktoriyaVorozhun/friday-live-coding/tree/develop)
  - [Макет в figma](https://www.figma.com/file/fw0GA18nmpVjTBzjtiEK2L/Friday_Live_Coding?node-id=0%3A1)