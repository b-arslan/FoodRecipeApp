function Content({ item }) {
    return (
        <div className="main">
            <div className="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={item.image || "https://bulma.io/images/placeholders/256x256.png"} alt={item.name} />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media-content">
                        <h2 class="title is-size-8">{item.name}</h2>
                        <h3 class="subtitle is-8">{item.category}</h3>
                        <br />
                    </div>
                    <div class="content">
                        {item.desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
