export interface Trend {
	id: string
	desc: string
	createTime: number
	video: Video
	author: Author
	music: Music
	challenges?: Challenge[]
	stats: Stats
	duetInfo: DuetInfo
	originalItem: boolean
	officalItem: boolean
	textExtra?: TextExtra[]
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
	stickersOnItem?: StickersOnItem[]
	effectStickers?: EffectSticker[]
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
	bitrateInfo: BitrateInfo[]
}

interface BitrateInfo {
	GearName: string
	Bitrate: number
	QualityType: number
	PlayAddr: PlayAddr
	CodecType: string
}

interface PlayAddr {
	Uri: string
	UrlList: string[]
	DataSize: number
	UrlKey: string
	FileHash: string
	FileCs: string
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
	isADVirtual: boolean
	roomId?: string
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

export interface Stats {
	diggCount: number
	shareCount: number
	commentCount: number
	playCount: number
}

interface DuetInfo {
	duetFromId: string
}

export interface TextExtra {
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

export interface AuthorStats {
	followingCount: number
	followerCount: number
	heartCount: number
	videoCount: number
	diggCount: number
	heart: number
}

interface StickersOnItem {
	stickerType: number
	stickerText: string[]
}

interface EffectSticker {
	name: string
	ID: string
}

export type Trends = Trend[] & { error?: string }
