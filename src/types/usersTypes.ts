export interface UserInfo {
	user: User
	stats: {
		followerCount: number
		followingCount: number
		heart: number
		heartCount: number
		videoCount: number
		diggCount: number
	}
	itemList: unknown[]
}

interface User {
	id: string
	shortId: string
	uniqueId: string
	nickname: string
	avatarLarger: string
	avatarMedium: string
	avatarThumb: string
	signature: string
	createTime: number
	verified: boolean
	secUid: string
	ftc: boolean
	relation: number
	openFavorite: boolean
	bioLink: BioLink
	commentSetting: number
	duetSetting: number
	stitchSetting: number
	privateAccount: boolean
	secret: boolean
	isADVirtual: boolean
	roomId: string
}

interface BioLink {
	link: string
	risk: number
}

export type UserTrends = UserTrend[] & { error?: string }

export interface UserTrend {
	id: string
	desc: string
	createTime: number
	video: Video
	author: Author
	music: Music
	challenges: Challenge[]
	stats: Stats
	duetInfo: DuetInfo
	originalItem: boolean
	officalItem: boolean
	textExtra: TextExtra[]
	secret: boolean
	forFriend: boolean
	digged: boolean
	itemCommentStatus: number
	showNotPass: boolean
	vl1: boolean
	itemMute: boolean
	authorStats: AuthorStats
	privateItem: boolean
	duetEnabled: boolean
	stitchEnabled: boolean
	shareEnabled: boolean
	isAd: boolean
	duetDisplay: number
	stitchDisplay: number
}

export interface Video {
	id: string
	height: number
	width: number
	duration: number
	ratio: string
	cover: string
	originCover: string
	dynamicCover: string
	playAddr: string
	downloadAddr: string
	shareCover: string[]
	reflowCover: string
	bitrate: number
	encodedType: string
	format: string
	videoQuality: string
	encodeUserTag: string
	codecType: string
	definition: string
}

interface Author {
	id: string
	uniqueId: string
	nickname: string
	avatarThumb: string
	avatarMedium: string
	avatarLarger: string
	signature: string
	verified: boolean
	secUid: string
	secret: boolean
	ftc: boolean
	relation: number
	openFavorite: boolean
	commentSetting: number
	duetSetting: number
	stitchSetting: number
	privateAccount: boolean
}

interface Music {
	id: string
	title: string
	playUrl: string
	coverThumb: string
	coverMedium: string
	coverLarge: string
	authorName: string
	original: boolean
	duration: number
	album: string
}

interface Challenge {
	id: string
	title: string
	desc: string
	profileThumb: string
	profileMedium: string
	profileLarger: string
	coverThumb: string
	coverMedium: string
	coverLarger: string
	isCommerce: boolean
}

interface Stats {
	diggCount: number
	shareCount: number
	commentCount: number
	playCount: number
}

interface DuetInfo {
	duetFromId: string
}

interface TextExtra {
	awemeId: string
	start: number
	end: number
	hashtagName: string
	hashtagId: string
	type: number
	userId: string
	isCommerce: boolean
	userUniqueId: string
	secUid: string
	subType: number
}

interface AuthorStats {
	followingCount: number
	followerCount: number
	heartCount: number
	videoCount: number
	diggCount: number
	heart: number
}
