# Bibliotech

This is the final project for the renowned italian learning platform Start2Impact - Javascript Advanced Section

## Demo link

Try library app on this link --> https://alessandrolibrary.netlify.app/

## About the app

This library application allow users to search books by category. Around twelve book previews are displayed for any category. You can also click on each book preview to show his specifics (author, title and description).

## Screenshots
![Nuova scheda - Google Chrome 2022-08-02 13-15-46 (2)](https://user-images.githubusercontent.com/64644550/183038866-ee690780-413a-4fbc-9561-ddda7dcef828.gif)
## Technologies

**HTML** - **CSS** - **JAVASCRIPT** - **APIs**

### Libraries

**Axios** - **Lodash**

## Installation

1. Clone the repo

```bash
  git@github.com:Alessandro9936/Library_application.git
```

2. Install NPM packages

```bash
  npm install
```

## API Reference

#### Get books by category

```
  https://openlibrary.org/subjects/${category}.json
```

| Parameter  | Type     | Description                               |
| :--------- | :------- | :---------------------------------------- |
| `category` | `string` | **Required**. Book category (ex. fantasy) |

#### Get book description

```
  https://openlibrary.org${book.key}.json
```

| Parameter  | Type     | Description                                  |
| :--------- | :------- | :------------------------------------------- |
| `book.key` | `string` | **Required**. Book key (ex. /works/OL85892W) |

## Environment Variables

In this case environment variables have been used just for project purposes, there are no private keys or sensible/personal data.

To run this project, you will need to add the following environment variables to your .env file

`BOOK_API_CATEGORY=https://openlibrary.org/subjects/`

`BOOK_API_DESCRIPTION=https://openlibrary.org`
