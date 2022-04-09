import "./deckCategories.css"

export const DeckCategories = (props: {categories: string[]}) => {

    return (
        <div className="categories">
            {
                props.categories.map(category => (
                    <div key={category} className="category">{category}</div>
                ))
            }
        </div>
    )
}