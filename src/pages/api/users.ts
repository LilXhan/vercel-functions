import { NextResponse, NextRequest } from "next/server";

export const config = {
  runtime: 'edge'
};


export default (req: NextRequest) => {
  return NextResponse.json({
    ok: true,
    data: [
      {
        id: 1,
        name: 'Flavio'
      },
      {
        id: 2,
        name: 'Lucas'
      }
    ]
  })
}