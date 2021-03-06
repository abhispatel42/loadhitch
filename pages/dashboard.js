import Head from 'next/head'
import LineGraph from '../components/LineGraph'

const dashboard = () => ({
    displayName: 'BarExample',
    render() {
        return (
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <LineGraph />
                    </div>
                    <div class="col-md-6">
                        <LineGraph />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <LineGraph />
                    </div>
                    <div class="col-md-6">
                        <LineGraph />
                    </div>
                </div>
            </div >
        );
    }
});

export default dashboard