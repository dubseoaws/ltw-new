/**
 * Google review data for the "What Our Patients Say" section.
 *
 * Transcribed from the live Elfsight widget, which truncates each card, so
 * `text` holds the visible snippet and `truncated` sends "Read more" to Google
 * for the full review. Only replace a snippet with the full review when the
 * complete wording is available — never invent review content.
 */

export type GoogleReview = {
  name: string;
  initial?: string;
  color?: string;
  timeAgo: string;
  rating: number;
  text: string;
  truncated?: boolean;
  url?: string;
};

export const googleRating = {
  score: "4.9",
  count: 443,
  reviewUrl: "https://maps.app.goo.gl/si9Bi4we4duoRonG8",
  heading: "What Our Patients Say",
  buttonLabel: "Review us on Google",
};

export const googleReviews: GoogleReview[] = [
  {
    name: "Marina I.",
    initial: "M",
    color: "bg-purple-700",
    timeAgo: "3 days ago",
    rating: 5,
    text: "I had a great experience with the hygienist Mrs. Mimi B",
    truncated: true,
  },
  {
    name: "Khalida B",
    initial: "K",
    color: "bg-indigo-600",
    timeAgo: "4 days ago",
    rating: 5,
    text: "The best of the best dentist I have been in my entire life. I would",
    truncated: true,
  },
  {
    name: "Marie-André",
    initial: "M",
    color: "bg-emerald-700",
    timeAgo: "5 days ago",
    rating: 5,
    text: "Had composite bonding done today, and I'm very happy",
    truncated: true,
  },
  {
    name: "S",
    initial: "S",
    color: "bg-amber-600",
    timeAgo: "10 days ago",
    rating: 5,
    text: "I had my dental hygiene appointment with Laila. She is kind",
    truncated: true,
  },
  {
    name: "james reilly",
    initial: "j",
    color: "bg-blue-600",
    timeAgo: "20 days ago",
    rating: 5,
    text: "Dr kamran Yazd and his assistant went the extra mile to solve th",
    truncated: true,
  },
];
