"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/check-username-unique/route";
exports.ids = ["app/api/check-username-unique/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_manor_OneDrive_Desktop_Feedback_src_app_api_check_username_unique_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/check-username-unique/route.ts */ \"(rsc)/./src/app/api/check-username-unique/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/check-username-unique/route\",\n        pathname: \"/api/check-username-unique\",\n        filename: \"route\",\n        bundlePath: \"app/api/check-username-unique/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\manor\\\\OneDrive\\\\Desktop\\\\Feedback\\\\src\\\\app\\\\api\\\\check-username-unique\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_manor_OneDrive_Desktop_Feedback_src_app_api_check_username_unique_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/check-username-unique/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGVjay11c2VybmFtZS11bmlxdWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNoZWNrLXVzZXJuYW1lLXVuaXF1ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoZWNrLXVzZXJuYW1lLXVuaXF1ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYW5vciU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0ZlZWRiYWNrJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtYW5vciU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0ZlZWRiYWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZDO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdGVyeS1tZXNzYWdlLz9jYTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1hbm9yXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcRmVlZGJhY2tcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hlY2stdXNlcm5hbWUtdW5pcXVlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGVjay11c2VybmFtZS11bmlxdWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGVjay11c2VybmFtZS11bmlxdWVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG1hbm9yXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcRmVlZGJhY2tcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hlY2stdXNlcm5hbWUtdW5pcXVlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/check-username-unique/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/check-username-unique/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _schemas_signUpSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/schemas/signUpSchema */ \"(rsc)/./src/schemas/signUpSchema.ts\");\n\n\n\n\nconst UsernameQuerySchema = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({\n    username: _schemas_signUpSchema__WEBPACK_IMPORTED_MODULE_2__.usernameValidation\n});\nasync function GET(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const { searchParams } = new URL(request.url);\n        const queryParams = {\n            username: searchParams.get(\"username\")\n        };\n        const result = UsernameQuerySchema.safeParse(queryParams);\n        if (!result.success) {\n            const usernameErrors = result.error.format().username?._errors || [];\n            return Response.json({\n                success: false,\n                message: usernameErrors?.length > 0 ? usernameErrors.join(\", \") : \"Invalid query parameters\"\n            }, {\n                status: 400\n            });\n        }\n        const { username } = result.data;\n        const existingVerifiedUser = await _model_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username,\n            isVerified: true\n        });\n        if (existingVerifiedUser) {\n            return Response.json({\n                success: false,\n                message: \"Username is already taken\"\n            }, {\n                status: 200\n            });\n        }\n        return Response.json({\n            success: true,\n            message: \"Username is unique\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error checking username:\", error);\n        return Response.json({\n            success: false,\n            message: \"Error checking username\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGVjay11c2VybmFtZS11bmlxdWUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUNiO0FBQ29DO0FBRTVELE1BQU1JLHNCQUFzQkYsa0NBQUNBLENBQUNHLE1BQU0sQ0FBQztJQUNuQ0MsVUFBVUgscUVBQWtCQTtBQUM5QjtBQUVPLGVBQWVJLElBQUlDLE9BQWdCO0lBQ3hDLE1BQU1SLDBEQUFTQTtJQUVmLElBQUk7UUFDRixNQUFNLEVBQUVTLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7UUFDNUMsTUFBTUMsY0FBYztZQUNsQk4sVUFBVUcsYUFBYUksR0FBRyxDQUFDO1FBQzdCO1FBRUEsTUFBTUMsU0FBU1Ysb0JBQW9CVyxTQUFTLENBQUNIO1FBRTdDLElBQUksQ0FBQ0UsT0FBT0UsT0FBTyxFQUFFO1lBQ25CLE1BQU1DLGlCQUFpQkgsT0FBT0ksS0FBSyxDQUFDQyxNQUFNLEdBQUdiLFFBQVEsRUFBRWMsV0FBVyxFQUFFO1lBQ3BFLE9BQU9DLFNBQVNDLElBQUksQ0FDbEI7Z0JBQ0VOLFNBQVM7Z0JBQ1RPLFNBQ0VOLGdCQUFnQk8sU0FBUyxJQUNyQlAsZUFBZVEsSUFBSSxDQUFDLFFBQ3BCO1lBQ1IsR0FDQTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTSxFQUFFcEIsUUFBUSxFQUFFLEdBQUdRLE9BQU9hLElBQUk7UUFFaEMsTUFBTUMsdUJBQXVCLE1BQU0zQixtREFBU0EsQ0FBQzRCLE9BQU8sQ0FBQztZQUNuRHZCO1lBQ0F3QixZQUFZO1FBQ2Q7UUFFQSxJQUFJRixzQkFBc0I7WUFDeEIsT0FBT1AsU0FBU0MsSUFBSSxDQUNsQjtnQkFDRU4sU0FBUztnQkFDVE8sU0FBUztZQUNYLEdBQ0E7Z0JBQUVHLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9MLFNBQVNDLElBQUksQ0FDbEI7WUFDRU4sU0FBUztZQUNUTyxTQUFTO1FBQ1gsR0FDQTtZQUFFRyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPUixPQUFPO1FBQ2RhLFFBQVFiLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE9BQU9HLFNBQVNDLElBQUksQ0FDbEI7WUFDRU4sU0FBUztZQUNUTyxTQUFTO1FBQ1gsR0FDQTtZQUFFRyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9hcHAvYXBpL2NoZWNrLXVzZXJuYW1lLXVuaXF1ZS9yb3V0ZS50cz85MDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnQC9saWIvZGJDb25uZWN0JztcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICdAL21vZGVsL1VzZXInO1xyXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcclxuaW1wb3J0IHsgdXNlcm5hbWVWYWxpZGF0aW9uIH0gZnJvbSAnQC9zY2hlbWFzL3NpZ25VcFNjaGVtYSc7XHJcblxyXG5jb25zdCBVc2VybmFtZVF1ZXJ5U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHVzZXJuYW1lOiB1c2VybmFtZVZhbGlkYXRpb24sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgICAgdXNlcm5hbWU6IHNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJuYW1lJyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFVzZXJuYW1lUXVlcnlTY2hlbWEuc2FmZVBhcnNlKHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJuYW1lRXJyb3JzID0gcmVzdWx0LmVycm9yLmZvcm1hdCgpLnVzZXJuYW1lPy5fZXJyb3JzIHx8IFtdO1xyXG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyb3JzPy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyB1c2VybmFtZUVycm9ycy5qb2luKCcsICcpXHJcbiAgICAgICAgICAgICAgOiAnSW52YWxpZCBxdWVyeSBwYXJhbWV0ZXJzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJlc3VsdC5kYXRhO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nVmVyaWZpZWRVc2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgaXNWZXJpZmllZDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ1ZlcmlmaWVkVXNlcikge1xyXG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxyXG4gICAgICB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBtZXNzYWdlOiAnVXNlcm5hbWUgaXMgdW5pcXVlJyxcclxuICAgICAgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB1c2VybmFtZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjaGVja2luZyB1c2VybmFtZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlVzZXJNb2RlbCIsInoiLCJ1c2VybmFtZVZhbGlkYXRpb24iLCJVc2VybmFtZVF1ZXJ5U2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicXVlcnlQYXJhbXMiLCJnZXQiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwidXNlcm5hbWVFcnJvcnMiLCJlcnJvciIsImZvcm1hdCIsIl9lcnJvcnMiLCJSZXNwb25zZSIsImpzb24iLCJtZXNzYWdlIiwibGVuZ3RoIiwiam9pbiIsInN0YXR1cyIsImRhdGEiLCJleGlzdGluZ1ZlcmlmaWVkVXNlciIsImZpbmRPbmUiLCJpc1ZlcmlmaWVkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/check-username-unique/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    // Check if we have a connection to the database or if it's currently connecting\n    if (connection.isConnected) {\n        return;\n    }\n    try {\n        // Attempt to connect to the database\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Database connected successfully\");\n    } catch (error) {\n        console.error(\"Database connection failed:\", error);\n        // Graceful exit in case of a connection error\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNiLGdGQUFnRjtJQUNoRixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUI7SUFDRjtJQUVBLElBQUk7UUFDRixxQ0FBcUM7UUFDckMsTUFBTUMsS0FBSyxNQUFNSix1REFBZ0IsQ0FBQ00sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUksSUFBSSxDQUFDO1FBRWxFUCxXQUFXRSxXQUFXLEdBQUdDLEdBQUdLLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7UUFFckRDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsK0JBQStCQTtRQUU3Qyw4Q0FBOEM7UUFDOUNQLFFBQVFRLElBQUksQ0FBQztJQUNmO0FBQ0Y7QUFFQSxpRUFBZVosU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9saWIvZGJDb25uZWN0LnRzPzYwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbnR5cGUgQ29ubmVjdGlvbk9iamVjdCA9IHtcclxuICBpc0Nvbm5lY3RlZD86IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb246IENvbm5lY3Rpb25PYmplY3QgPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2Ugb3IgaWYgaXQncyBjdXJyZW50bHkgY29ubmVjdGluZ1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQXR0ZW1wdCB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnLCB7fSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHknKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xyXG5cclxuICAgIC8vIEdyYWNlZnVsIGV4aXQgaW4gY2FzZSBvZiBhIGNvbm5lY3Rpb24gZXJyb3JcclxuICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\n// Updated User schema\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify Code is required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"Verify Code Expiry is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFPdEQsTUFBTUMsZ0JBQWlDLElBQUlELHdEQUFlLENBQUM7SUFDekRHLFNBQVM7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVEgsTUFBTUk7UUFDTkYsVUFBVTtRQUNWRyxTQUFTRCxLQUFLRSxHQUFHO0lBQ25CO0FBQ0Y7QUFhQSxzQkFBc0I7QUFDdEIsTUFBTUMsYUFBMkIsSUFBSVgsd0RBQWUsQ0FBQztJQUNuRFksVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q08sTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMWCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFvQjtRQUNyQ1EsUUFBUTtRQUNSRSxPQUFPO1lBQUM7WUFBYztTQUFtQztJQUMzRDtJQUNBQyxVQUFVO1FBQ1JiLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO0lBQzFDO0lBQ0FZLFlBQVk7UUFDVmQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7SUFDN0M7SUFDQWEsa0JBQWtCO1FBQ2hCZixNQUFNSTtRQUNORixVQUFVO1lBQUM7WUFBTTtTQUFpQztJQUNwRDtJQUNBYyxZQUFZO1FBQ1ZoQixNQUFNaUI7UUFDTlosU0FBUztJQUNYO0lBQ0FhLHFCQUFxQjtRQUNuQmxCLE1BQU1pQjtRQUNOWixTQUFTO0lBQ1g7SUFDQWMsVUFBVTtRQUFDdEI7S0FBYztBQUMzQjtBQUVBLE1BQU11QixZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCMUIscURBQWMsQ0FBTyxRQUFRVztBQUUvQixpRUFBZWEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9tb2RlbC9Vc2VyLnRzP2E2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2UgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgTWVzc2FnZVNjaGVtYTogU2NoZW1hPE1lc3NhZ2U+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgY29udGVudDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHZlcmlmeUNvZGU6IHN0cmluZztcclxuICB2ZXJpZnlDb2RlRXhwaXJ5OiBEYXRlOyBcclxuICBpc1ZlcmlmaWVkOiBib29sZWFuO1xyXG4gIGlzQWNjZXB0aW5nTWVzc2FnZXM6IGJvb2xlYW47XHJcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcclxufVxyXG5cclxuLy8gVXBkYXRlZCBVc2VyIHNjaGVtYVxyXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8VXNlcj4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW1haWwgaXMgcmVxdWlyZWQnXSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIG1hdGNoOiBbLy4rXFxALitcXC4uKy8sICdQbGVhc2UgdXNlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJ10sXHJcbiAgfSxcclxuICB2ZXJpZnlDb2RlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdWZXJpZnkgQ29kZSBpcyByZXF1aXJlZCddLFxyXG4gIH0sXHJcbiAgdmVyaWZ5Q29kZUV4cGlyeToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1ZlcmlmeSBDb2RlIEV4cGlyeSBpcyByZXF1aXJlZCddLFxyXG4gIH0sXHJcbiAgaXNWZXJpZmllZDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaXNBY2NlcHRpbmdNZXNzYWdlczoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBtZXNzYWdlczogW01lc3NhZ2VTY2hlbWFdLFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXJNb2RlbCA9XHJcbiAgKG1vbmdvb3NlLm1vZGVscy5Vc2VyIGFzIG1vbmdvb3NlLk1vZGVsPFVzZXI+KSB8fFxyXG4gIG1vbmdvb3NlLm1vZGVsPFVzZXI+KCdVc2VyJywgVXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1lc3NhZ2VTY2hlbWEiLCJTY2hlbWEiLCJjb250ZW50IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0cmltIiwidW5pcXVlIiwiZW1haWwiLCJtYXRjaCIsInBhc3N3b3JkIiwidmVyaWZ5Q29kZSIsInZlcmlmeUNvZGVFeHBpcnkiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImlzQWNjZXB0aW5nTWVzc2FnZXMiLCJtZXNzYWdlcyIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ }),

/***/ "(rsc)/./src/schemas/signUpSchema.ts":
/*!*************************************!*\
  !*** ./src/schemas/signUpSchema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signUpSchema: () => (/* binding */ signUpSchema),\n/* harmony export */   usernameValidation: () => (/* binding */ usernameValidation)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst usernameValidation = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Username must be at least 2 characters\").max(20, \"Username must be no more than 20 characters\").regex(/^[a-zA-Z0-9_]+$/, \"Username must not contain special characters\");\nconst signUpSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    username: usernameValidation,\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email({\n        message: \"Invalid email address\"\n    }),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, {\n        message: \"Password must be at least 6 characters\"\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2NoZW1hcy9zaWduVXBTY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRWpCLE1BQU1DLHFCQUFxQkQsa0NBQUNBLENBQ2hDRSxNQUFNLEdBQ05DLEdBQUcsQ0FBQyxHQUFHLDBDQUNQQyxHQUFHLENBQUMsSUFBSSwrQ0FDUkMsS0FBSyxDQUFDLG1CQUFtQixnREFBZ0Q7QUFFckUsTUFBTUMsZUFBZU4sa0NBQUNBLENBQUNPLE1BQU0sQ0FBQztJQUNuQ0MsVUFBVVA7SUFFVlEsT0FBT1Qsa0NBQUNBLENBQUNFLE1BQU0sR0FBR08sS0FBSyxDQUFDO1FBQUVDLFNBQVM7SUFBd0I7SUFDM0RDLFVBQVVYLGtDQUFDQSxDQUNSRSxNQUFNLEdBQ05DLEdBQUcsQ0FBQyxHQUFHO1FBQUVPLFNBQVM7SUFBeUM7QUFDaEUsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9zY2hlbWFzL3NpZ25VcFNjaGVtYS50cz81ODEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJuYW1lVmFsaWRhdGlvbiA9IHpcclxuICAuc3RyaW5nKClcclxuICAubWluKDIsICdVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycycpXHJcbiAgLm1heCgyMCwgJ1VzZXJuYW1lIG11c3QgYmUgbm8gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnKVxyXG4gIC5yZWdleCgvXlthLXpBLVowLTlfXSskLywgJ1VzZXJuYW1lIG11c3Qgbm90IGNvbnRhaW4gc3BlY2lhbCBjaGFyYWN0ZXJzJyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHVzZXJuYW1lOiB1c2VybmFtZVZhbGlkYXRpb24sXHJcblxyXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycgfSksXHJcbiAgcGFzc3dvcmQ6IHpcclxuICAgIC5zdHJpbmcoKVxyXG4gICAgLm1pbig2LCB7IG1lc3NhZ2U6ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycgfSksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsieiIsInVzZXJuYW1lVmFsaWRhdGlvbiIsInN0cmluZyIsIm1pbiIsIm1heCIsInJlZ2V4Iiwic2lnblVwU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/schemas/signUpSchema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheck-username-unique%2Froute&page=%2Fapi%2Fcheck-username-unique%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheck-username-unique%2Froute.ts&appDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmanor%5COneDrive%5CDesktop%5CFeedback&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();