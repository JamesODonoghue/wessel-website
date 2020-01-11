import React from "react";
import Skeleton from "react-loading-skeleton";

const listView = (list: []) => (
    list.map(({
        text, link, title
    }: {
        text: string;
        link: string,
        title: string
    }) => (
            <div className="list-container">
                <div className="list-item-title">{title}</div>
                <div className="list-item-body">
                    <p style={{ marginBottom: '2rem' }}>
                        <a href={link}>{text}</a>
                    </p>
                </div>
            </div>
        )
    )
)
class About extends React.Component<any, any> {
    listOfBills: [];

    constructor(props: any) {
        super(props);

        this.state = {
            listOfBills: [],
            loadingBills: [...Array(30)]
        };
    }

    async componentDidMount() {
        let cachedList = localStorage.getItem("listOfBills");

        if (!cachedList) {
            let result = await fetch(`${process.env.REACT_APP_API_URL}/rep-data`);
            let bills = await result.json();

            localStorage.setItem("listOfBills", JSON.stringify(bills));

            this.setState({
                listOfBills: bills
            });
        } else {
            this.setState({
                listOfBills: JSON.parse(cachedList)
            });
        }
    }


    render() {
        const { listOfBills, loadingBills } = this.state;
        return (
            <div>
                <section>
                    <div className="main-content__header">
                        <h1>Sponsored Legislation</h1>
                    </div>
                    {listOfBills.length > 0
                        ? listView(listOfBills)
                        : loadingBills.map(() => (
                            <p>
                                <Skeleton count={3} />
                            </p>
                        ))}
                </section>
            </div>
        );
    }
}

export default About;
