export function generatePost(input: string) {
    const hooks = [
        "Escape to",
        "Discover",
        "Experience",
        "Unveil the beauty of",
        "Get ready for"
    ]

    const vibes = [
        "luxury vibes",
        "unforgettable memories",
        "breathtaking views",
        "ultimate relaxation",
        "adventure of a lifetime"
    ]

    const ctas = [
        "Book now ✈️",
        "Plan your trip today 🌍",
        "Don’t miss out!",
        "Start your journey now 🚀"
    ]

    const hashtags = [
        "#Travel",
        "#Vacation",
        "#ExploreIndia",
        "#Wanderlust",
        "#Holiday",
        "#Tourism",
        "#TravelGoals",
        "#IncredibleIndia"
    ]

    // Random picker
    const random = (arr: string[]) =>
        arr[Math.floor(Math.random() * arr.length)]

    // Pick random hashtags
    const selectedTags = hashtags
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

    return `
 ${random(hooks)} ${input} ${random(["like never before!", "in style!", "today!"])}

Experience ${random(vibes)} and create memories that last forever.

${random(ctas)}

${selectedTags.join(" ")}
`
}