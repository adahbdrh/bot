exports.menu = (prefix, i) => {
    return `*Xinz Bot*
Created by Xinz Team

*INFO*
${i.free} cekprefix
${i.free} ${prefix}stats
${i.free} ${prefix}limit
${i.free} ${prefix}balance
${i.free} ${prefix}runtime
${i.free} ${prefix}speed
${i.free} ${prefix}owner
${i.free} ${prefix}donasi
${i.free} ${prefix}sourcecode

*Coverter / Tools*
${i.limit} ${prefix}sticker
${i.prem} ${prefix}swm
${i.prem} ${prefix}take
${i.limit} ${prefix}toimg
${i.limit} ${prefix}attp text
${i.limit} ${prefix}tinyurl url
${i.limit} ${prefix}imgtourl
${i.limit} ${prefix}nulis text
${i.limit} ${prefix}nuliskiri text
${i.limit} ${prefix}nuliskanan text
${i.limit} ${prefix}foliokiri text
${i.limit} ${prefix}foliokanan text
${i.limit} ${prefix}translate kodebahasa [reply pesan/text]

*Downloader*
${i.limit} ${prefix}ytmp4 url
${i.limit} ${prefix}ytmp3 url
${i.limit} ${prefix}igdl url
${i.limit} ${prefix}fbdl url
${i.limit} ${prefix}tiktok url
${i.limit} ${prefix}yts query
${i.limit} ${prefix}play query
${i.limit} ${prefix}playmp4 query

*Stalker*
${i.limit} ${prefix}igstalk username
${i.limit} ${prefix}ghstalk username

*Text Marker*
${i.limit} ${prefix}blackpink text
${i.limit} ${prefix}tahta text
${i.limit} ${prefix}neon text
${i.limit} ${prefix}glitch text1|text2
${i.limit} ${prefix}pornhub text1|text2

*Baileys*
${i.free} ${prefix}tagme
${i.limit} ${prefix}kontak nomor|nama
${i.prem} ${prefix}hidetag
${i.free} ${prefix}jadian
${i.free} ${prefix}ganteng
${i.free} ${prefix}cantik

*Premium*
${i.owner} ${prefix}addprem @tag
${i.owner} ${prefix}delprem @tag
${i.owner} ${prefix}cekprem
${i.free} ${prefix}listprem

*Ban*
${i.owner} ${prefix}ban @tag
${i.owner} ${prefix}unban @tag
${i.free} ${prefix}listban

*Game*
${i.free} ${prefix}topbalance
${i.free} ${prefix}buylimit
${i.free} ${prefix}buyglimit
${i.glimit} ${prefix}tictactoe @tag
${i.glimit} ${prefix}tebakgambar
${i.glimit} ${prefix}family100

*VVIBU*
${i.limit} ${prefix}waifu
${i.limit} ${prefix}loli
${i.limit} ${prefix}nekonime
${i.limit} ${prefix}megumin
${i.limit} ${prefix}shinobu

*Random*
${i.free} ${prefix}apakah
${i.free} ${prefix}bisakah
${i.free} ${prefix}kapankah
${i.free} ${prefix}hobby
${i.free} ${prefix}rate
${i.free} ${prefix}cekbapak
${i.free} ${prefix}seberapagay
${i.limit} ${prefix}truth
${i.limit} ${prefix}dare

*Group*
${i.free} ${prefix}afk
${i.free} ${prefix}infogrup
${i.free} ${prefix}chatinfo
${i.owner} ${prefix}add 628xx
${i.owner} ${prefix}kick @tag
${i.owner} ${prefix}promote @tag
${i.owner} ${prefix}demote @tag
${i.free} ${prefix}linkgc
${i.owner} ${prefix}leave
${i.owner} ${prefix}setdesc
${i.owner} ${prefix}setgrupname
${i.owner} ${prefix}setppgrup
${i.owner} ${prefix}opengrup
${i.owner} ${prefix}closegrup
${i.owner} ${prefix}join
${i.owner} ${prefix}tagall
${i.owner} ${prefix}mute
${i.owner} ${prefix}unmute

*Enable / Disable*
${i.owner} ${prefix}antilink
${i.owner} ${prefix}welcome
${i.owner} ${prefix}left
${i.owner} ${prefix}antibadword
${i.free} ${prefix}listbadword
${i.owner} ${prefix}addbadword
${i.owner} ${prefix}delbadword

*Owner*
${i.owner} >
${i.owner} $
${i.owner} ${prefix}self
${i.owner} ${prefix}public
${i.owner} ${prefix}setpp
${i.owner} ${prefix}setname
${i.owner} ${prefix}setbio
${i.owner} ${prefix}setprefix
${i.owner} ${prefix}bc
${i.owner} ${prefix}clearall
${i.owner} ${prefix}exif nama|author

Note :
${i.owner} : Fitur Admin Grup atau Owner
${i.free} : Fitur gratis yang tidak memakai limit
${i.limit} : Fitur yang memakai 1 limit harian
${i.glimit} : Fitur yang memakai 1 limit game
${i.prem} : Fitur khusus premium user`
}

exports.newMenu = (ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `---[ *UWLOH-HAWUK* ]---
──────────────────────
├ *Creator : ${ownerName}*
├ *Prefix :  ${prefix} *
├ *Tanggal : ${tanggal}*
├ *Pukul : ${jam}*
├────────────────────
---[ *INFO* ]---
├────────────────────
├ *Name* : *${pushname}*
├ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Bukan premium'}*
├ *${prefix}limit*
├ *${prefix}owner*
├ *${prefix}ping*
├ *${prefix}donasi*
├ *${prefix}cekpremium*
├ *${prefix}listprem*
├ *${prefix}topsaldo*
├ *${prefix}buylimit*
├ *${prefix}buyglimit*
├ *${prefix}delete*
├────────────────────
---[ *GAME* ]---
├ *${prefix}tebakgambar*
├ *${prefix}tictactoe*
├ *${prefix}delttt*
├────────────────────
---[ *STICKER* ]---
├ *${prefix}stiker*
├ *${prefix}sgif*
├ *${prefix}stickerwm*
├ *${prefix}toimg*
├ *${prefix}attp [text]*
├ *${prefix}ttp [text]*
├────────────────────
---[ *TOOLS&MAKER* ]---
├ *${prefix}shorturl [link]*
├ *${prefix}imgtourl*
├ *${prefix}nuliskiri [text]*
├ *${prefix}nuliskanan [text]*
├ *${prefix}foliokiri [text]*
├ *${prefix}foliokanan [text]*
├ *${prefix}gradient [text] (Minimal 3krakter)*
├ *${prefix}glows [text] (Minimal 3krakter)*
├ *${prefix}kontak [nomor|nama]*
├ *${prefix}yts [query]*
├ *${prefix}stalkig [username]*
├ *${prefix}ghstalk [username]*
├────────────────────
---[ *FUN* ]---
├ *${prefix}bisakah [pertanyaan]*
├ *${prefix}kapankah [pertanyaan]*
├ *${prefix}apakah [pertanyaan]*
├ *${prefix}rate*
├ *${prefix}hobby*
├ *${prefix}truth*
├ *${prefix}dare*
├ *${prefix}cekbapak*
├ *${prefix}quotes*
├ *${prefix}tagme*
├────────────────────
---[ *WIBU* ]---
├ *${prefix}nekonime*
├ *${prefix}megumin*
├ *${prefix}shinobu*
├────────────────────
---[ *DOWNLOADER* ]---
├ *${prefix}ytmp4 [link]*
├ *${prefix}ytmp3 [link]*
├ *${prefix}playmp4 [query]*
├ *${prefix}playmp3 [query]*
├ *${prefix}ig [link]*
├ *${prefix}fb [link]*
├────────────────────
---[ *GROUP* ]---
├ *${prefix}tictactoe*
├ *${prefix}delttt*
├ *${prefix}ganteng*
├ *${prefix}cantik*
├ *${prefix}jadian*
├ *${prefix}hidetag*
├ *${prefix}afk*
├ *${prefix}infogrup*
├ *${prefix}add*
├ *${prefix}kick*
├ *${prefix}promote*
├ *${prefix}demote*
├ *${prefix}linkgc*
├ *${prefix}leave*
├ *${prefix}setdesc*
├ *${prefix}setgrupname*
├ *${prefix}sider*
├ *${prefix}opengrup*
├ *${prefix}closegrup*
├ *${prefix}setppgrup*
├ *${prefix}tagall*
├ *${prefix}tagme*
├ *${prefix}mute*
├────────────────────
---[ *THANKS TO* ]---
├────────────────────
├ *Xinz-Team*
├ *Aqulzz*
├ *Nafiz*
├ *Y-DhyZx*
├ *Ramlan ID*
├ *X-MrG3P5*
├ *Nanda*
├ *Juwen*
├ *Adiwajshing/Baileys*
---[ *By ${ownerName}* ]---`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STICKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm*
├≽ *${prefix}take*
├≽ *${prefix}toimg*
├≽ *${prefix}attp*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *CREATOR MENU* 》 ═══
├────────────────────
├≽ *${prefix}addprem*
├≽ *${prefix}delprem*
├≽ *${prefix}ban*
├≽ *${prefix}unban*
├≽ *${prefix}join*
├≽ *${prefix}addbaword*
├≽ *${prefix}delbaword*
├≽ *${prefix}addchangelog*
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc*
├≽ *${prefix}setprefix*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}afk*
├≽ *${prefix}infogrup*
├≽ *${prefix}add*
├≽ *${prefix}kick*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc*
├≽ *${prefix}setgrupname*
├≽ *${prefix}setppgrup*
├≽ *${prefix}opengrup*
├≽ *${prefix}closegrup*
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak*
├≽ *${prefix}hidetag*
├≽ *${prefix}getpp*
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SISTEM MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}antiwame*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.kerangMenu = (prefix, ownerName) => {
    return `╒═══ 《 *KERANG MENU* 》 ═══
├────────────────────
├≽ *${prefix}apakah*
├≽ *${prefix}bisakah*
├≽ *${prefix}kapankah*
├≽ *${prefix}hobby*
├≽ *${prefix}rate*
├≽ *${prefix}cekbapak*
├≽ *${prefix}seberapagay*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe*
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├≽ *${prefix}tiktok*
├≽ *${prefix}tiktokmp3*
├≽ *${prefix}instagram*
├≽ *${prefix}facebook*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.searchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}yts*
├≽ *${prefix}pinterest*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}quotes*
├≽ *${prefix}darkjokes
├≽ *${prefix}pantun
├≽ *${prefix}bucin
├≽ *${prefix}cehor
├≽ *${prefix}fakta
├≽ *${prefix}katabijak
├≽ *${prefix}motivasi
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}shinobu*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}blackpink*
├≽ *${prefix}neon*
├≽ *${prefix}glitch*
├≽ *${prefix}pornhub*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topbalance*
├≽ *${prefix}cekapikey*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}nsfwneko*
├≽ *${prefix}nsfwtrap*
├≽ *${prefix}nsfwblowjob*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}nsfwkitsune*
├≽ *${prefix}nsfwyuri*
├≽ *${prefix}nsfwboobs*
├≽ *${prefix}nsfwkuni*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound1*
├≽ *${prefix}sound2*
├≽ *${prefix}sound3*
├≽ *${prefix}sound4*
├≽ *${prefix}sound5*
├≽ *${prefix}sound6*
├≽ *${prefix}sound7*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}
