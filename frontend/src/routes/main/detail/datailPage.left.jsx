import "./detailPage.left.css";

const DetailPageLeft = (props) => {
  console.log(props.data.imglink);
  return (
    <div className="detail_item">
      <section>
        <div>
          <img src={props.imglink} alt="맛집 사진" />
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default DetailPageLeft;
