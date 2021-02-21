import service from "./request";

// 登录接口
export function loginRequest(data) {
  return service.request({
    url: "/admin/login/",
    method: "POST",
    data,
  });
}
