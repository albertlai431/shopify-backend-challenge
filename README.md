# shopify-backend-challenge

Backend for managing inventory. Uses the PERN stack (PostgreSQL, Express, React and Node). CRUD functionality for managing inventory items and feature that allows exporting inventory data into JSON.

Demo:

https://user-images.githubusercontent.com/44041989/150167738-b15b4d7b-1146-4f0b-873b-0c1feca156e6.mov

# How to Run

1. Install [NodeJS & npm](https://nodejs.org/en/) and PostgreSQL (either via [HomeBrew if using MacOS](https://formulae.brew.sh/formula/postgresql) or the [website](https://www.postgresql.org/download/))
2. Start the PostgreSQL server

```bash
# If installed via the website
pg_ctl -D /usr/local/var/postgres start

# If installed via homebrew on M1 Mac, run this first
/opt/homebrew/bin/createuser -s postgres

# If installed via homebrew
brew services start postgresql
```

3. Run the following commands in the Terminal/Command Prompt:

```bash
git clone https://github.com/albertlai431/shopify-backend-challenge.git
cd shopify-backend-challenge
psql -U postgres < server/database.sql
cd server
npm i
nodemon index.js

#Note: if if you installed PostgreSQL via the website, replace the command beginning with "psql" with:
PGPASSWORD=INSERT_PASSWORD_HERE psql -U postgres < server/database.sql
```

4. Navigate to the shopify-backend-challenge folder in another Terminal/Command Prompt shell and run the following commands:

```bash
cd client
npm i
npm run start
```
