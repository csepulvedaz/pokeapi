const Image = ({ url, alt, width }) => {
	return <img src={url} alt={alt} className="m-auto" width={width} height={width}  />;
};

export default Image;
