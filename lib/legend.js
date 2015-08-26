define(function () {
    return function () {
        var self = this

        self.render = function (el) {
            var p = document.createElement("p")
            p.setAttribute("class", "legend")
            el.appendChild(p)

            var spanNew = document.createElement("span")
            var textNew = document.createTextNode(" Neuer Knoten.")
            var symbolNew = document.createElement("span")
            symbolNew.setAttribute("class", "symbol")
            spanNew.appendChild(symbolNew)
            spanNew.appendChild(textNew)
            spanNew.setAttribute("class", "legend-new")
            p.appendChild(spanNew)

            var spanOnline = document.createElement("span")
            var textOnline = document.createTextNode(" Knoten ist online.")
            var symbolOnline = document.createElement("span")
            symbolOnline.setAttribute("class", "symbol")
            spanOnline.appendChild(symbolOnline)
            spanOnline.appendChild(textOnline)
            spanOnline.setAttribute("class", "legend-online")
            p.appendChild(spanOnline)

            var spanOffline = document.createElement("span")
            var textOffline = document.createTextNode(" Knoten ist offline.")
            var symbolOffline = document.createElement("span")
            symbolOffline.setAttribute("class", "symbol")
            spanOffline.appendChild(symbolOffline)
            spanOffline.appendChild(textOffline)
            spanOffline.setAttribute("class", "legend-offline")
            p.appendChild(spanOffline)
        }

        return self
    }
})
