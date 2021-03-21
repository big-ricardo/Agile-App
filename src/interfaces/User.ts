export default interface User {
  id: string | null,
  name: string,
  avatar: string,
  stars: number,
  services?: [],
  photos?: [],
  testimonials?: [],
  favorites?: [],
  appointments?: []
}
