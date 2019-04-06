// eslint-disable-next-line
export function normalizeDocument(doc) {
  return {
    ...doc.data(),
    id: doc.id,
  };
}
