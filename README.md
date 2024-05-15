### Hexlet tests and linter status:
[![Actions Status](https://github.com/kabatsyura/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kabatsyura/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/e8b1f0f88fcbf4189c04/maintainability)](https://codeclimate.com/github/kabatsyura/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e8b1f0f88fcbf4189c04/test_coverage)](https://codeclimate.com/github/kabatsyura/frontend-project-46/test_coverage)

[![Node CI](https://github.com/kabatsyura/frontend-project-46/workflows/Node%20CI/badge.svg)](https://github.com/kabatsyura/frontend-project-46/actions)

[![Hexlet-check](https://github.com/kabatsyura/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/kabatsyura/frontend-project-46/actions)

--- Русская версия ---

# Вычислитель отличий

### Описание

**Вычислитель отличий** - программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

### Установка:  

Установка осуществляется с помощью:

```
git clone https://github.com/kabatsyura/frontend-project-46.git

```
Далее, переходите в склонированную папку и устанавливаете npm.

```
make install

```

### Поэтапное развитие проекта.

#### Шаг 2. Работа над CLI проекта. Первые выводы в терминал

[![asciicast](https://asciinema.org/a/x2mtnG3iX3XE6n293czYqeVcz.svg)](https://asciinema.org/a/x2mtnG3iX3XE6n293czYqeVcz)

#### Шаг 3. Пробуем выводить содержимое файла

[![asciicast](https://asciinema.org/a/BSrDUqIKzanAhvbsbc5TD72JP.svg)](https://asciinema.org/a/BSrDUqIKzanAhvbsbc5TD72JP)

#### Шаг 4. Наше первое сравнение файлов между собой

[![asciicast](https://asciinema.org/a/GbL9iBwX5WcoNGrYCBA6eYewR.svg)](https://asciinema.org/a/GbL9iBwX5WcoNGrYCBA6eYewR)

#### Шаг 6. Сравнение 3х типов данных: json, yaml, yml. Тестирование под каждый тип расширения.

[![asciicast](https://asciinema.org/a/HZcoAiUMI2FPIFSCiJFvtgBQP.svg)](https://asciinema.org/a/HZcoAiUMI2FPIFSCiJFvtgBQP)

#### Шаг 7. Сравнение вложенных объектов. Самый сложный этап проекта.

**Сделано:**
Написаны тесты.
Сформировано дерево с типами отличий объектов.
Отформатировано дерево, исходя из типа отличий как показано на экране.

[![asciicast](https://asciinema.org/a/Au5vhstsJV2l9Ll3FRmcasERj.svg)](https://asciinema.org/a/Au5vhstsJV2l9Ll3FRmcasERj)

#### Шаг 8. Сравнение вложенных объектов. Самый сложный этап проекта.

**Сделано:**
Написан тест.
Отформатировано дерево в формат, где текстом отражены все изменения в файле.

[![asciicast](https://asciinema.org/a/iVDEV9nA49GYkMkfc2H7wFRyf.svg)](https://asciinema.org/a/iVDEV9nA49GYkMkfc2H7wFRyf)