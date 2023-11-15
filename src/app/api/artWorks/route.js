import { getArtWorks } from '@/app/lib/artworks';

export async function GET(request) {
  try {
    const { artWorks, error } = await getArtWorks();
    if (error) throw new Error(error);
    // const reults = await works;
    return Response.json(
      { artWorks },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}

// const handler = async (req, res) => {
//   if (req.method === 'GET') {
//     try {
//       const { works, error } = await getArtWorks();
//       if (error) throw new Error(error);
//       works = await res.json();
//       return Response.json({ works });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }

//   res.setHeader('Allow', ['GET']);
//   res.status(425).end(`Method ${req.method} is not allowed`);
// };

// export default handler;
