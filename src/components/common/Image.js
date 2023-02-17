const Image = ({ url, alt, width }) => {
	return <img src={url} alt={alt} className="m-auto drop-shadow-2xl" width={width} height={width}  />;
};

export default Image;
