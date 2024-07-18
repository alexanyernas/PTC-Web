export const requireImage = (link: string) => {
    return new URL(`/src/assets/images/${link}`, import.meta.url).href;
}