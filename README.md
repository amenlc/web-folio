# web-folio

Landing page estática de Café & Pilates (`cafe-pilates-landing-page/src/index.html`).

## Planes

Los botones "Elegir Plan" de cada sede enlazan directo al formulario de pago de Webpay:

| Sede | Plan | Precio | Link de pago |
|---|---|---|---|
| Egaña | 4 clases | $41.141 | https://www.webpay.cl/form-pay/401549 |
| Egaña | 8 clases | $72.004 | https://www.webpay.cl/form-pay/401550 |
| Egaña | 12 clases | $99.781 | https://www.webpay.cl/form-pay/401553 |
| Infante | 4 clases | $41.141 | https://www.webpay.cl/form-pay/401543 |
| Infante | 8 clases | $67.889 | https://www.webpay.cl/form-pay/401544 |
| Infante | 12 clases | $92.580 | https://www.webpay.cl/form-pay/401547 |

Al cambiar precios, actualizar también: el `value` del evento `fbq('track', 'Lead')` de cada botón, las `Offer` del JSON-LD, la pregunta de precios del FAQ (HTML y JSON-LD) y `src/llms.txt`.

## Banner de comprobante

Bajo las tarjetas de cada sede hay un banner (`.comprobante-banner`, con `data-sede`) que pide enviar el comprobante por WhatsApp (`https://wa.me/56933419907`). Por defecto el mensaje es "Hola! He comprado un plan en Sede X"; al hacer clic en "Elegir Plan", `js/main.js` reescribe el link a "Hola! He comprado un plan de N Clases en Sede X" (toma el plan del `<h3>` de la tarjeta). El plan elegido se guarda en `localStorage` por sede (`planElegido:<sede>`), así el link lo sigue incluyendo si se recarga la página o se vuelve desde Webpay en la misma pestaña. Texto del banner en 1.25rem y negrita.
