import ProfileNav from '../components/ProfileNav'

const dashboard = () => ({
    displayName: 'BarExample',
    render() {
        return (
            <div>
                <ProfileNav />
            </div>
        )
    }
});

export default dashboard