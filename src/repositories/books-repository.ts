import { CreateBook } from "../protocols/book";
import { Book } from "@prisma/client";
import { CreateReview } from "../protocols/review";
import prisma from "../database/index";

export async function getBooks() {
  return await prisma.book.findMany();
}

export async function getBook(id: number) {
  return await prisma.book.findUnique({
    where: {
      id: id,
    }
  });
}

export async function createBook(book: CreateBook) {
  return await prisma.book.create({
    data: book
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  return await prisma.book.update({
    data: {
      grade: grade,
      review: review
    },
    where: {id: bookId}
  });
}