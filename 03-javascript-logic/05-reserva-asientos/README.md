# 05 — Validar reserva de asientos

Implementa `canReserve(requestedSeats, occupiedSeats, maxSeatsPerBooking)`.

Ambos arrays contienen identificadores como `A1`, `A2`, `B4`.

Devuelve:

```js
{ ok: true }
```

o, si no se puede reservar:

```js
{ ok: false, reason: '...' }
```

## Reglas mínimas

- No se pueden pedir 0 asientos.
- No se puede superar `maxSeatsPerBooking`.
- No se puede repetir el mismo asiento en la petición.
- Ningún asiento solicitado puede estar ocupado.

## Extra

Haz que el texto de `reason` sea útil para una UI, no un simple `false`.
