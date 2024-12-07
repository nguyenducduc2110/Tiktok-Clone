import Header from '../componens/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            {/* thẻ này bọc body tiktok */}
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
