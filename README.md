# Tasks App with Next.js v13, Prisma ORM, PostgreSQL, and Tailwind CSS

This is a simple task list application built using Next.js, Prisma, PostgreSQL, and Tailwind CSS. The app allows you to interactively add, edit, and delete tasks.

## Features

- Add tasks.
- Edit tasks.
- Delete tasks.

## View the Deployed Project on Vercel

You can check out the deployed version of the project by following this link:

[Demo on Vercel](https://nextjs13-prisma-crud-v2.vercel.app/)

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework optimized for building modern web applications.
- [Prisma](https://www.prisma.io/): A next-generation Node.js and TypeScript ORM.
- [PostgreSQL](https://www.postgresql.org/): The world's most advanced open-source relational database.
- [Tailwind CSS](https://tailwindcss.com/): A highly customizable CSS framework.

## Installation Requirements

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone this repository: `git clone https://github.com/fosware/next13-prisma-crud-v2.git`
2. Navigate to the project directory: `cd next13-prisma-crud-v2`
3. Install the dependencies: `npm install`
4. Initialize Prisma: `npx prisma init --datasource-provider sqlite` (Change the provider to `postgresql` when deploying on Vercel).
5. Migrate the database: `npx prisma migrate dev --name init`.

## How to Use

1. Start the development server: `npm run dev`
2. Open your browser and visit: [http://localhost:3000](http://localhost:3000)

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to [open an issue](https://github.com/fosware/next13-prisma-crud-v2/issues) or submit a [pull request](https://github.com/fosware/next13-prisma-crud-v2/pulls).

## Credits

This TODO application was built following the tutorial by [FaztCode](https://www.youtube.com/@FaztCode). You can find the tutorial on their [YouTube channel](https://www.youtube.com/watch?v=_SPoSMmN3ZU&ab_channel=FaztCode).

A big thank you to FaztCode for providing educational content that helped me learn about Next.js, Prisma, PostgreSQL, and Tailwind CSS.

---

Enjoy using your task application with Next.js, Prisma, PostgreSQL, and Tailwind CSS! If you have any questions or need assistance, don't hesitate to contact me.