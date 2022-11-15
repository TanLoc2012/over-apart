import './HeaderText.scss';
import ShowMoreText from 'react-show-more-text';

function HeaderText() {
    return (
        <div className="container header__text">
            <h4 className="header__text-title">Khám phá ý tưởng trang trí và cảm hứng cho ngôi nhà của bạn</h4>
            <ShowMoreText
                lines={1}
                more="Xêm thêm"
                less="Thu gọn"
                className="header__text-show-more"
                anchorClass="show-more-less-clickable"
                expanded={false}
                width={600}
                truncatedEndingComponent={'... '}
            >
                Lấy cảm hứng từ hình ảnh cộng đồng của chúng tôi để tạo ra thiết kế của riêng bạn
                <br /> <br />
                Tìm kiếm cảm hứng? Duyệt qua các hình ảnh được tạo ra bởi cộng đồng để tìm ý tưởng thiết kế nhà. Chọn
                một hình ảnh để xem các sản phẩm chi tiết và lấy cảm hứng thiết kế cho dự án thiết kế nội thất của riêng
                bạn!
                <br /> <br /> Chủ đề cảm hứng của chúng tôi cho phép bạn khám phá tất cả các thành tích được tạo ra bởi
                cộng đồng của chúng tôi để đáp ứng nhu cầu của bạn. Các bộ lọc cho phép bạn chọn các chủ đề mà bạn quan
                tâm, cho dù đó là một mảnh, màu hoặc thậm chí là một thương hiệu.
                <br /> <br /> Cho dù bạn đang tìm kiếm các xu hướng mới nhất, hoặc ý tưởng trang trí đơn giản cho ngôi
                nhà của bạn hoặc thậm chí là khu vườn của bạn, chủ đề cảm hứng của chúng tôi sẽ hướng dẫn bạn và cho
                phép bạn thể hiện sự sáng tạo của mình. Từ phòng ngủ đến phòng khách, qua phòng tắm, hành lang, phòng
                ăn, phòng chơi và thậm chí phòng giặt, tất cả các phòng của một ngôi nhà đều ở đó để giúp bạn nhận ra
                tất cả các dự án thiết kế nhà của bạn.
                <br /> Duyệt qua chủ đề của chúng tôi, chọn các sáng tạo truyền cảm hứng cho bạn và tạo dự án của riêng
                bạn, pha trộn các phong cách và làm cho nhận thức của bạn trở nên độc đáo! Tìm các ý tưởng thiết kế nhà
                phù hợp với bạn nhờ vào công cụ tìm kiếm của chúng tôi và khám phá hàng ngàn dự án. Đăng các dự án của
                bạn để làm phong phú cộng đồng với những sáng tạo của bạn và truyền cảm hứng cho những người xung quanh
                bạn.
                <br /> <br /> Để biết thêm ý tưởng trang trí, hãy xem các bài viết mới nhất của chúng tôi trên tạp chí
                Thiết kế nội thất của chúng tôi!
                <br /> <br /> Cuối cùng bạn có tìm thấy ý tưởng bạn đang tìm kiếm và muốn bắt đầu dự án thiết kế nội
                thất của mình không? Trước khi bắt đầu bất kỳ công việc cải thiện nhà nào, hãy tạo kế hoạch sàn nhà của
                bạn để hình dung nội thất mơ ước của bạn như thể bạn ở đó. Hombyme là một phần mềm kế hoạch gia đình
                miễn phí hoàn chỉnh và dễ sử dụng, vì vậy hãy bắt đầu dự án của bạn ngay bây giờ bằng cách đăng ký, nó
                không có cam kết!
            </ShowMoreText>
        </div>
    );
}

export default HeaderText;
