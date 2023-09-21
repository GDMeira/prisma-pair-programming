export type CreateReview = {
  bookId: number;
  review: string;
  grade: number;
};

// export type CreateReview = Omit<Review, "id">;