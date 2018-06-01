let defaultCity = '石柱县'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  defaultCity: function () {
    return defaultCity
  }
}
