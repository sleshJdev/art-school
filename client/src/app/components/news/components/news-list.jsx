import React from 'react';
import ReactDom from 'react-dom';

import News from './news';
import NewsForm from './news-form';

const NewsList = React.createClass({
    render() {
        return (
            <div>
                <div className="panel">
                    <button className="button--ok" onClick={this.openNewsForm}>Добавить новость</button>
                </div>
                <div>
                    {
                        this.props.newsList.map(function (news) {
                            return <News key={news._id} news={news}/>
                        })
                    }
                </div>
            </div>

        )
    },
    openNewsForm() {
        ReactDom.render(<NewsForm/>, document.querySelector("#container"));
    }
});

export default NewsList;

