export function ImgContainer({ src, name, width }) {
    return <div className="card-img">
        <img src={src} alt={name} width={width} />
    </div>

}