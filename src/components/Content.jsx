function Content({ item }) {
    return (
        <div className="main">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={item.image || "https://bulma.io/images/placeholders/256x256.png"} alt={item.name} />
                    </figure>
                </div>
                <div class="card-content">
                    {/* Burada item üzerinden gelen verilere göre içeriği doldurun. */}
                    {/* Örnek olarak: */}
                    <div class="media-content">
                        <p class="title is-4">{item.name}</p>
                        <p class="subtitle is-6">{item.category}</p>
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
