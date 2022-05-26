# Library Application

This library application allow users to search books by category. Around twelve book previews are displayed for any category. You can also click on each book preview to show his specifics (author, title and description).

## Built With

- HTML
- CSS
- Javascript

### Libraries

- Axios
- Lodash

## Installation

1. Clone the repo

```bash
  git clone https://github.com/Alessandro9936/Weather_App.git
```

2. Install NPM packages

```bash
  npm install
```

## API Reference

#### Get books by category

```http
  GET https://openlibrary.org/subjects/${category}.json
```

| Parameter  | Type     | Description                               |
| :--------- | :------- | :---------------------------------------- |
| `category` | `string` | **Required**. Book category (ex. fantasy) |

#### Get book description

```http
  GET https://openlibrary.org${book.key}.json
```

| Parameter  | Type     | Description                                  |
| :--------- | :------- | :------------------------------------------- |
| `book.key` | `string` | **Required**. Book key (ex. /works/OL85892W) |

## Environment Variables

In this case environment variables have been used just for project purposes, there are no private keys or sensible/personal data.

To run this project, you will need to add the following environment variables to your .env file

`BOOK_API_CATEGORY=https://openlibrary.org/subjects/`

`BOOK_API_DESCRIPTION=https://openlibrary.org`

## Demo

Live Library Application demo here: https://alessandrolibrary.netlify.app/
