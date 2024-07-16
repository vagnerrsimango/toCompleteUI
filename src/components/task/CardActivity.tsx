/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sCj1N0NqHPt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function CardActivity() {
  return (
    <div className="p-4 w-full">
   
      {/* <div className="flex items-center justify-between pb-4 border-b">
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
          
            <span>By Status</span>
          </Button>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Properties
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Group by Status
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Filter
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Sort
          </Link>
          <div className="relative">
           
            <Input type="search" placeholder="Search" className="pl-8" />
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <span>New</span>
        
        </Button>
      </div> */}
      <div className="grid grid-cols-3 gap-4 py-4">
        <div>
          <div className="flex items-center justify-between pb-2">
            <Badge variant="secondary">In Progress</Badge>
            <span>3</span>
          </div>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
           
                <h2 className="text-lg font-semibold">Brand Colors</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <span>Sam Baldwin</span>
              </div>
              <Badge variant="destructive">High</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
       
                <h2 className="text-lg font-semibold">Help Center Redesign</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DT</AvatarFallback>
                </Avatar>
                <span>David Tibbitts</span>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
 
                <h2 className="text-lg font-semibold">Standardize Typography</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span>Andrea Lim</span>
              </div>
              <Badge variant="default">Low</Badge>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full">
            New
          </Button>
        </div>
        <div>
          <div className="flex items-center justify-between pb-2">
            <Badge variant="secondary">Completed</Badge>
            <span>6</span>
          </div>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
            
                <h2 className="text-lg font-semibold">Illustrated Portraits</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <span>Camille Ricketts</span>
              </div>
              <Badge variant="destructive">High</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
           
                <h2 className="text-lg font-semibold">Mobile Dropdown</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <span>Nate Martins</span>
              </div>
              <Badge variant="destructive">High</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
             
                <h2 className="text-lg font-semibold">Illustrated Facebook Ads</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <span>Nate Martins</span>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
        
                <h2 className="text-lg font-semibold">Font Exploration</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span>Andrea Lim</span>
              </div>
              <Badge variant="default">Low</Badge>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full">
            New
          </Button>
        </div>
        <div>
          <div className="flex items-center justify-between pb-2">
            <Badge variant="secondary">Overdue</Badge>
            <span>4</span>
          </div>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
            
                <h2 className="text-lg font-semibold">Guidelines for Visuals</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CE</AvatarFallback>
                </Avatar>
                <span>Cory Etzkorn</span>
              </div>
              <Badge variant="destructive">High</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
                
                <h2 className="text-lg font-semibold">Signup Menu</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span>Andrea Lim</span>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
              
                <h2 className="text-lg font-semibold">GIF Instagram Ads</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <span>Nate Martins</span>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <div className="flex items-center space-x-2">
          
                <h2 className="text-lg font-semibold">Email Signature</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span>Andrea Lim</span>
              </div>
              <Badge variant="default">Low</Badge>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full">
            New
          </Button>
        </div>
      </div>
    </div>
  )
}

