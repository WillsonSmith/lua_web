build:
	nelua --cc emcc main.nelua -o js/lua_loader

run:
	nelua --cc emcc main.nelua