import { h, Component } from 'preact';

export class MuteButton extends Component {
    render() {
        const src = this.props.muted ? 'svg/mute_on.svg' : 'svg/mute_off.svg';

        return (
            <img
                onClick={this.props.clickHandler}
                className="mute-button"
                src={src}
            />
        );
    }
}

export default MuteButton;
