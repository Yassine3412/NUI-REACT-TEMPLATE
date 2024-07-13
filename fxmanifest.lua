fx_version 'cerulean'
game 'gta5'

description 'React App For FiveM'
author 'VIT0'
version '1.0.0'
lua54 "yes"

ui_page 'html/dist/index.html'

files {
	'html/dist/index.html',
	'html/dist/**/*',
}
shared_scripts { 
	"@ox_lib/init.lua",
	'@es_extended/imports.lua',
	'@es_extended/locale.lua',
}

client_script 'client/**/*'
shared_script 'config.lua'
server_script {'@oxmysql/lib/MySQL.lua','server/**/*'}