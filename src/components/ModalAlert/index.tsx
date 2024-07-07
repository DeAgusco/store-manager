import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { ClipLoader } from "react-spinners";

type DeleteAlert = {
    deleteProduct: () => void,
    deleteLoading: boolean,
}
  
const AlertModal = ({deleteProduct, deleteLoading}:  DeleteAlert ) =>  {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button 
           type='button'
            variant="outline" 
            className='w-11/12 transition duration-700 ease-in-out hover:scale-110 bg-red-400 text-white'>
            {deleteLoading ? (
               <ClipLoader size={30} color="#ffffff" />
              ) : (
              <p>Delete</p>
            )}
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              product and remove your data from our server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className={"bg-red-400 text-white"} onClick={deleteProduct}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export default AlertModal;