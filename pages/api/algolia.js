import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

export default async (req, res) => {
  const {
    event,
    payload: { id: objectID, ...payload },
  } = req.body;
  // split data into resource = product , trigger = create,update,delete
  const [resource, trigger] = event.split('.');

  try {

  const index = client.initIndex(resource) 
  if (trigger == 'delete') {
    await index.deleteObject(objectID)
    return res.status(204).end();
  }

  if (['create', 'update'].includes(trigger)) {
    return res.status(trigger == 'create' ? 201 : 202).json(
      await index.saveObject({
        objectID,
        ...payload,
      })
    );
  }
  res.status(422).json({message: `${trigger} is not a valid trigger`});
} catch({message = 'Something went wrong'}) {
    res.status(500).json({ message })
}
};