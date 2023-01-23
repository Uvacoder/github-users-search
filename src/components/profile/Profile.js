import './profile.css';
import iconLocation from '../../assets/icon-location.svg';
import iconWebsite from '../../assets/icon-website.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconCompany from '../../assets/icon-company.svg';


export default function Profile({data}) {
	const NOT_AVAILABLE = {opacity: 0.5}
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
	const ACDAVIT = 'animated'
	const createdAtDate = new Date(Date.parse(data.created_at));
	const createdAt = createdAtDate.getDate() + ' ' + MONTHS[createdAtDate.getMonth()] + ' ' + createdAtDate.getFullYear();

	return (<div id='profile'>
        <img
			src={data.avatar_url}
			alt='avatar'
			id='avatar-desktop'
		></img>

		<div id='profile-content'>
			<div id='main-profile-section'>
				<img src={data.avatar_url} alt='avatar' id='avatar'></img>
				<div id='main-profile-section-text'>
					<div id='names'>
						<h2>{data.name ? data.name : '@' + data.login}</h2>
						<h3 className={data.login === 'acdavit' ? ACDAVIT : ''}>@{data.login}</h3>
					</div>
					<h4>Joined {createdAt}</h4>	
				</div>
			</div>

			{data.bio ? <p id='bio'>{data.bio}</p> : null}

			<div id='stats-section'>
				<div className='stat'>
					<h4>Repos</h4>
					<p>{data.public_repos}</p>	
				</div>

				<div className='stat'>
					<h4>Followers</h4>
					<p>{data.followers}</p>	
				</div>

				<div className='stat'>
					<h4>Following</h4>
					<p>{data.following}</p>	
				</div>			
			</div>

			<div id='links-section'>
				<div className='link-couples'>
					<div className='link' style={data.location ? {} : NOT_AVAILABLE}>
						<div className='link-image-container'>
							<img src={iconLocation} alt=''></img>	
						</div>
						<span className='link-text'>{data.location ? data.location : 'Not available'}</span>
					</div>

					<div className='link' style={data.blog ? {} : NOT_AVAILABLE}>
						<div className='link-image-container'>
							<img src={iconWebsite} alt=''></img>	
						</div>
						<span className='link-text'>{data.blog ? data.blog : 'Not available'}</span>
					</div>
				</div>

				<div className='link-couples'>
					<div className='link' style={data.twitter_username ? {} : NOT_AVAILABLE}>
						<div className='link-image-container'>
							<img src={iconTwitter} alt=''></img>	
						</div>
						<span className='link-text'>{data.twitter_username ? '@' + data.twitter_username : 'Not available'}</span>
					</div>

					<div className='link' style={data.company ? {} : NOT_AVAILABLE}>
						<div className='link-image-container'>
							<img src={iconCompany} alt=''></img>	
						</div>
						<span className='link-text'>{data.company ? data.company : 'Not available'}</span>
					</div>
				</div>
			</div>
		</div>
    </div>)
}