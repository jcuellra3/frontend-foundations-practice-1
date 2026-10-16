export function canReserve(requestedSeats, occupiedSeats, maxSeatsPerBooking) {
  //Se valida pedir al menos 1 asiento
  if (!requestedSeats || requestedSeats.length === 0) {
    return { ok: false, reason: "Debes seleccionar al menos un asiento." };
  }

  //Se valida que no se supere "maxSeatsPerBooking"
  if (requestedSeats.length > maxSeatsPerBooking) {
    return {
      ok: false,
      reason: "Se ha superado el máximo de asientos permitidos.",
    };
  }

  //Se valida que no haya asientos repetidos en la petición
  const uniqueSeats = new Set(requestedSeats);
  if (uniqueSeats.size !== requestedSeats.length) {
    return {
      ok: false,
      reason:
        "No se puede seleccionar el mismo asiento varias veces en la misma reserva.",
    };
  }

  //Se valida que ningún asiento solicitado esté ocupado
  for (const seat of requestedSeats) {
    if (occupiedSeats.includes(seat)) {
      return { ok: false, reason: "El asiento solicitado ya está ocupado." };
    }
  }

  //Si pasa las validaciones correctamente:
  return { ok: true };
}
